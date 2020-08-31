import { FirebaseService } from './../firestore/firebase.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { LandingCardInterface } from '../landing/landing-card.interface';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandingResolve implements Resolve<LandingCardInterface> {
  constructor(private FbService: FirebaseService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | LandingCardInterface
    | Observable<LandingCardInterface>
    | Promise<LandingCardInterface> {
    return this.FbService.getLandingItem(route.params.id).pipe(take(1));
  }
}
