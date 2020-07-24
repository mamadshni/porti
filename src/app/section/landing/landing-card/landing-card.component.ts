import { LandingCardInterface } from './../../../share/landing-card.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-card',
  templateUrl: './landing-card.component.html',
  styleUrls: [ './landing-card.component.scss' ]
})
export class LandingCardComponent implements OnInit {
  @Input() cardDetail: LandingCardInterface;
  constructor() {}

  ngOnInit(): void {}
}
