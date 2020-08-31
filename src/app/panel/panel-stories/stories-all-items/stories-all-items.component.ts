import { StoryService } from './../../../share/stories/story.service';
import { StoryCardInterface } from './../../../share/stories/story-card.interface';
import { FirebaseService } from './../../../share/firestore/firebase.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories-all-items',
  templateUrl: './stories-all-items.component.html',
  styleUrls: [ './stories-all-items.component.scss' ]
})
export class StoriesAllItemsComponent implements OnInit {
  $storyItems: Observable<StoryCardInterface[]>;
  constructor(
    private storyService: StoryService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.$storyItems = this.storyService.getStories();
  }

  deletItem(card: StoryCardInterface): void {
    this.firebaseService
      .removeStoryItem(card)
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }
}
