import { StoryService } from './../../share/stories/story.service';
import { StoryCardInterface } from './../../share/stories/story-card.interface';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: [ './stories.component.scss' ]
})
export class StoriesComponent implements OnInit {
  currentWindowState = 'big';
  cardHeight = 1130;
  storiesList: StoryCardInterface[] = [];

  @HostListener('window:resize', [ '$event' ])
  onResize(): void {
    if (window.innerWidth >= 1241) {
      if (this.currentWindowState === 'big') {
        return;
      } else {
        this.currentWindowState = 'big';
        this.cardHeight = 1100;
      }
    } else if (window.innerWidth >= 800) {
      if (this.currentWindowState === 'med') {
        return;
      } else {
        this.currentWindowState = 'med';
        this.cardHeight = 850;
      }
    } else {
      if (this.currentWindowState === 'sml') {
        return;
      } else {
        this.currentWindowState = 'sml';
        this.cardHeight = 650;
      }
    }
  }

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.storiesList = this.storyService.getStories();
    this.onResize();
  }

  // tslint:disable-next-line:typedef
  handler(event) {
    console.log(event);
  }
}
