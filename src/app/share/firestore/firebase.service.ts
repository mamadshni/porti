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
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  task: AngularFireUploadTask;
  itemDoc: AngularFirestoreDocument<LandingCardInterface>;

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  createLandingItem(value, file: File): Observable<any> {
    const path = `landing/${Date.now()}_${file.name}`;
    const fileRef = this.storage.ref(path);

    this.task = this.storage.upload(path, file);

    return this.task.snapshotChanges().pipe(
      finalize(async () => {
        const downloadUrl = await fileRef.getDownloadURL().toPromise();

        this.firestore.collection('landings').add({
          title: value.name,
          imageUrl: downloadUrl,
          summery: value.summery
        });
      })
    );
  }

  getLandingItems(): Observable<LandingCardInterface[]> {
    const landingCollection: AngularFirestoreCollection<
      LandingCardInterface
    > = this.firestore.collection('landings');

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
    return this.firestore.collection('landings').doc(item.id).delete();
  }
}
