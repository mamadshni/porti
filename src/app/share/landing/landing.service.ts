import { FirebaseService } from './../firestore/firebase.service';
import { LandingCardInterface } from './landing-card.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  constructor(private firebaseService: FirebaseService) {}

  private $landingCards: Observable<LandingCardInterface[]>;

  getLandingCards(): Observable<LandingCardInterface[]> {
    this.$landingCards = this.firebaseService.getLandingItems();
    return this.$landingCards;
  }

  getCardsLength(): Observable<number> {
    return this.$landingCards.pipe(
      map((items: LandingCardInterface[]) => {
        return items.length;
      })
    );
  }
}
