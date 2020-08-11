import { StoryCardInterface } from './../../../share/stories/story-card.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: [ './story-card.component.scss' ]
})
export class StoryCardComponent implements OnInit {
  @Input() storyCardData: StoryCardInterface;

  constructor() {}

  ngOnInit(): void {}
}
