import { FirebaseService } from './../firestore/firebase.service';
import { Observable } from 'rxjs';
import { StoryCardInterface } from './story-card.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private $storylist: Observable<StoryCardInterface[]>;

  constructor(private firebaseService: FirebaseService) {}

  getStories(): Observable<StoryCardInterface[]> {
    this.$storylist = this.firebaseService.getStoryItems();
    return this.$storylist;
  }
}
