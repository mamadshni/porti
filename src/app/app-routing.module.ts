import { MainPortiComponent } from './main-porti/main-porti.component';
import { AboutComponent } from './section/about/about.component';
import { LandingComponent } from './section/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoriesComponent } from './section/stories/stories.component';

const routes: Routes = [
  {
    path: 'panel',
    loadChildren: () =>
      import('./panel/panel.module').then((m) => m.PanelModule)
  },
  {
    path: '',
    component: MainPortiComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LandingComponent, data: { animation: '1' } },
      {
        path: 'stories',
        component: StoriesComponent,
        data: { animation: '2' }
      },
      { path: 'about', component: AboutComponent, data: { animation: '3' } }
    ]
  }

  // { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
