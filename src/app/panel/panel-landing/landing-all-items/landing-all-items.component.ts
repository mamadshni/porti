import { FirebaseService } from './../../../share/firestore/firebase.service';
import { Observable } from 'rxjs';
import { LandingService } from './../../../share/landing/landing.service';
import { Component, OnInit } from '@angular/core';
import { LandingCardInterface } from 'src/app/share/landing/landing-card.interface';

@Component({
  selector: 'app-landing-all-items',
  templateUrl: './landing-all-items.component.html',
  styleUrls: [ './landing-all-items.component.scss' ]
})
export class LandingAllItemsComponent implements OnInit {
  $landingItems: Observable<LandingCardInterface[]>;
  constructor(
    private landingService: LandingService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.$landingItems = this.landingService.getLandingCards();
  }

  deletItem(card: LandingCardInterface): void {
    this.firebaseService
      .removeLandingItem(card)
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }
}
