import { LandingCardInterface } from './../../../share/landing/landing-card.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-card',
  templateUrl: './landing-card.component.html',
  styleUrls: [ './landing-card.component.scss' ]
})
export class LandingCardComponent implements OnInit {
  @Input() cardDetail: LandingCardInterface;
  @Output() imageIsLoaded = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  imageLoaded(): void {
    this.imageIsLoaded.emit();
  }
}
