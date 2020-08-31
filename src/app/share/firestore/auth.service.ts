import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { first, tap } from 'rxjs/operators';
import {
  Observable,
  observable,
  Subject,
  BehaviorSubject,
  Subscription
} from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogedIn = new Subject<boolean>();
  constructor(private auth: AngularFireAuth) {}

  loginUser(
    email: string,
    pass: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, pass).then((result) => {
      this.isUserLogedIn.next(true);
      return result;
    });
  }

  logOut(): Promise<void> {
    return this.auth.signOut();
  }

  isLoggedIn(): Subject<boolean> {
    this.auth.authState
      .pipe(
        first(),
        tap((user) => {
          if (user) {
            this.isUserLogedIn.next(true);
          } else {
            this.isUserLogedIn.next(false);
          }
        })
      )
      .subscribe();

    return this.isUserLogedIn;
  }
}
