import { StoryCardInterface } from './../stories/story-card.interface';
import { FirebaseService } from './../firestore/firebase.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoriesResolve implements Resolve<StoryCardInterface> {
  constructor(private FbService: FirebaseService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | StoryCardInterface
    | Observable<StoryCardInterface>
    | Promise<StoryCardInterface> {
    return this.FbService.getStoryItem(route.params.id).pipe(take(1));
  }
}
