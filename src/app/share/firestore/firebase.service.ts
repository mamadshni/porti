import { StoryCardInterface } from './../stories/story-card.interface';
import { LandingCardInterface } from './../landing/landing-card.interface';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  task: AngularFireUploadTask;
  itemDoc: AngularFirestoreDocument<LandingCardInterface>;

  constructor(
    private fs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  // =========================== storage ===================================

  removeImageFormStorage(path: string): Observable<any> {
    const resultObs = from(this.storage.storage.refFromURL(path).delete());
    return resultObs;
  }

  uploadFileToStorage(file: File, pathStorage: string): Observable<any> {
    const path = `${pathStorage}/${Date.now()}_${file.name}`;
    this.task = this.storage.upload(path, file);

    const resultObs = from(
      this.task.then((task) => {
        return task.ref.getDownloadURL();
      })
    );
    return resultObs;
  }

  // ============================= landing ==================================

  createLandingItem(value, imageFile: File): Observable<any> {
    return this.uploadFileToStorage(imageFile, 'landing').pipe(
      map((downloadUrl) => {
        const resultObs = from(
          this.fs.collection('landings').add({
            title: value.title,
            imageUrl: downloadUrl,
            summery: value.summery
          })
        );

        return resultObs;
      })
    );
  }

  getLandingItems(): Observable<LandingCardInterface[]> {
    const landingCollection: AngularFirestoreCollection<
      LandingCardInterface
    > = this.fs.collection('landings');

    return landingCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  removeLandingItem(item: LandingCardInterface): Promise<void> {
    this.removeImageFormStorage(item.imageUrl);
    return this.fs.collection('landings').doc(item.id).delete();
  }

  getLandingItem(itemId: string): Observable<LandingCardInterface> {
    const LandingItemDoc: AngularFirestoreDocument<
      LandingCardInterface
    > = this.fs.collection('landings').doc(itemId);

    return LandingItemDoc.snapshotChanges().pipe(
      map((action) => {
        const data = action.payload.data();
        const id = action.payload.id;
        return { id, ...data };
      })
    );
  }

  updateImageLanding(
    itemId: string,
    item: LandingCardInterface,
    imageFile: File,
    oldImageRef: any
  ): Observable<any> {
    return this.uploadFileToStorage(imageFile, 'landing').pipe(
      map((imageUrl) => {
        this.removeImageFormStorage(oldImageRef);
        return this.updateLanding(itemId, item, imageUrl);
      })
    );
  }

  updateLanding(
    itemId: string,
    item: LandingCardInterface,
    imageAdr: any
  ): Observable<void> {
    const LandingItemDoc: AngularFirestoreDocument<
      LandingCardInterface
    > = this.fs.collection('landings').doc(itemId);

    const resultObs = from(
      LandingItemDoc.update({
        title: item.title,
        imageUrl: imageAdr,
        summery: item.summery
      })
    );

    return resultObs;
  }

  // =========================== stories =================================

  createStorieItem(value, imageFile: File): Observable<any> {
    return this.uploadFileToStorage(imageFile, 'stories').pipe(
      map((downloadUrl) => {
        const resultObs = from(
          this.fs.collection('stories').add({
            title: value.title,
            imageUrl: downloadUrl,
            summery: value.summery,
            categories: value.categories,
            story: value.story,
            date: new Date()
          })
        );

        return resultObs;
      })
    );
  }

  getStoryItems(): Observable<StoryCardInterface[]> {
    const storiesCollection: AngularFirestoreCollection<
      StoryCardInterface
    > = this.fs.collection('stories');

    return storiesCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          Object.keys(data)
            .filter((key) => data[key] instanceof Timestamp)
            .forEach((key) => (data[key] = data[key].toDate()));
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getStoryItem(itemId: string): Observable<StoryCardInterface> {
    const StoryItemDoc: AngularFirestoreDocument<
      StoryCardInterface
    > = this.fs.collection('stories').doc(itemId);

    return StoryItemDoc.snapshotChanges().pipe(
      map((action) => {
        const data = action.payload.data();
        Object.keys(data)
          .filter((key) => data[key] instanceof Timestamp)
          .forEach((key) => (data[key] = data[key].toDate()));
        const id = action.payload.id;
        return { id, ...data };
      })
    );
  }

  removeStoryItem(item: StoryCardInterface): Promise<void> {
    this.removeImageFormStorage(item.imageUrl);
    return this.fs.collection('stories').doc(item.id).delete();
  }

  updateStory(
    itemId: string,
    item: StoryCardInterface,
    imageAdr: any
  ): Observable<void> {
    const StoryItemDoc: AngularFirestoreDocument<
      StoryCardInterface
    > = this.fs.collection('stories').doc(itemId);

    const resultObs = from(
      StoryItemDoc.update({
        title: item.title,
        imageUrl: imageAdr,
        summery: item.summery,
        categories: item.categories,
        story: item.story,
        date: new Date()
      })
    );

    return resultObs;
  }

  updateImageStory(
    itemId: string,
    item: StoryCardInterface,
    imageFile: File,
    oldImageRef: any
  ): Observable<any> {
    return this.uploadFileToStorage(imageFile, 'stories').pipe(
      map((imageUrl) => {
        this.removeImageFormStorage(oldImageRef);
        return this.updateStory(itemId, item, imageUrl);
      })
    );
  }
}
