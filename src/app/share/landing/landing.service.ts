import { LandingCardInterface } from './landing-card.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private landingCards: LandingCardInterface[] = [
    {
      imageUrl: '../../../../assets/images/landing/1.jpg',
      title: 'test1',
      summery:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto rerum praesentium soluta, dolores dolore.',
      type: 'Lorem ipsum'
    },
    {
      imageUrl: '../../../../assets/images/landing/2.jpg',
      title: 'test2',
      summery:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto rerum praesentium soluta, dolores dolore.',
      type: 'Lorem ipsum'
    },
    {
      imageUrl: '../../../../assets/images/landing/3.jpg',
      title: 'test3',
      summery:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto rerum praesentium soluta, dolores dolore.',
      type: 'Lorem ipsum'
    }
  ];

  getLandingCards(): LandingCardInterface[] {
    return this.landingCards.slice();
  }

  getLandingCard(index: number): LandingCardInterface {
    return this.getLandingCards()[index];
  }

  getCardsLength(): number {
    return this.landingCards.length;
  }

  constructor() {}
}
