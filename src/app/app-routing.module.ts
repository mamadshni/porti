import { AboutComponent } from './section/about/about.component';
import { LandingComponent } from './section/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
