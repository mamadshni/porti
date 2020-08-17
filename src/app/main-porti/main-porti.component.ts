import { Component, OnInit } from '@angular/core';
import { routeTransitionAnimations } from './../animations/routing.animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-porti',
  templateUrl: './main-porti.component.html',
  styleUrls: [ './main-porti.component.scss' ],
  animations: [ routeTransitionAnimations ]
})
export class MainPortiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet): any {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
