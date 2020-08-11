import { StoryCardInterface } from './../../share/stories/story-card.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: [ './stories.component.scss' ]
})
export class StoriesComponent implements OnInit {
  storiesList: StoryCardInterface[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i < 100; i++) {
      this.storiesList.push({ id: i });
    }
  }

  // tslint:disable-next-line:typedef
  handler(event) {
    console.log(event);
  }
}
