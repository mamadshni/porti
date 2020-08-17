import { landingCardAnimation } from '../../animations/landing-card.animation';
import { LandingCardInterface } from './../../share/landing/landing-card.interface';
import { LandingService } from './../../share/landing/landing.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.scss' ],
  animations: [ landingCardAnimation ]
})
export class LandingComponent implements OnInit {
  landingCards: LandingCardInterface[];
  correntCardIndex = 0;
  MaxLenght: number;
  isEventDoing = false;
  isEveryCardchecked = false;
  lastTouch = 0;

  constructor(private landingService: LandingService) {}

  @HostListener('wheel', [ '$event' ])
  mouseScroll(event: MouseWheelEvent): void {
    if (this.isEventDoing) {
      return;
    }
    if (event.deltaY > 0 && this.correntCardIndex + 1 !== this.MaxLenght) {
      this.correntCardIndex += 1;
    } else if (event.deltaY < 0 && this.correntCardIndex - 1 >= 0) {
      this.correntCardIndex -= 1;
    }
  }

  @HostListener('touchstart', [ '$event' ])
  touchStart(event: TouchEvent): void {
    if (this.isEventDoing) {
      return;
    }
    this.lastTouch = event.touches[0].clientY;
  }

  @HostListener('touchend', [ '$event' ])
  touchEnd(event: TouchEvent): void {
    if (this.isEventDoing) {
      return;
    }

    const touchPos = event.changedTouches[0].clientY;

    if (this.lastTouch < touchPos) {
      if (this.correntCardIndex - 1 >= 0) {
        this.correntCardIndex -= 1;
      }
    } else {
      if (this.correntCardIndex + 1 !== this.MaxLenght) {
        this.correntCardIndex += 1;
      }
    }
  }

  ngOnInit(): void {
    this.landingCards = this.landingService.getLandingCards();
    this.MaxLenght = this.landingService.getCardsLength();
  }
  startCardAnimation(): void {
    this.isEventDoing = true;
  }

  endCardAnimation(): void {
    this.isEventDoing = false;
  }

  loadNextImage(): void {
    if (this.isEveryCardchecked) {
      return;
    } else {
      if (this.landingCards.length === this.correntCardIndex + 1) {
        this.isEveryCardchecked = true;
      } else {
        const preLoadImage = new Image();
        preLoadImage.src = this.landingCards[
          this.correntCardIndex + 1
        ].imageUrl;

        console.log('preload next one');
      }
    }
  }
}
