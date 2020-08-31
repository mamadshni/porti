import { Subscription } from 'rxjs';
import { AuthService } from './../../share/firestore/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: [ './panel-header.component.scss' ]
})
export class PanelHeaderComponent implements OnInit, OnDestroy {
  isLogedIn = false;
  loserLogSubscription: Subscription;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loserLogSubscription = this.authService
      .isLoggedIn()
      .subscribe((result: boolean) => (this.isLogedIn = result));
  }

  Logout(): void {
    this.authService.logOut().then(() => {
      this.authService.isUserLogedIn.next(false);
      this.router.navigate([ 'panel', 'login' ]);
    });
  }

  ngOnDestroy(): void {
    this.loserLogSubscription.unsubscribe();
  }
}
