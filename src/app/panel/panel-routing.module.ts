import { StoriesResolve } from './../share/panel/stories-resolve.service';
import { StoriesAllItemsComponent } from './panel-stories/stories-all-items/stories-all-items.component';
import { StoriesItemEditorComponent } from './panel-stories/stories-item-editor/stories-item-editor.component';
import { PanelStoriesComponent } from './panel-stories/panel-stories.component';
import { PanelLoginComponent } from './panel-login/panel-login.component';
import { LandingResolve } from './../share/panel/landing-resolve.service';
import { LandingAllItemsComponent } from './panel-landing/landing-all-items/landing-all-items.component';
import { LandingItemEditorComponent } from './panel-landing/landing-item-editor/landing-item-editor.component';
import { PanelLandingComponent } from './panel-landing/panel-landing.component';
import { TestComponent } from './test/test.component';
import { PanelComponent } from './panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  redirectUnauthorizedTo,
  canActivate,
  redirectLoggedInTo
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo([ 'panel', 'login' ]);

const redirectLoggedInToPage = () => redirectLoggedInTo([ 'panel', 'landing' ]);

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: PanelLoginComponent,
        ...canActivate(redirectLoggedInToPage)
      },
      {
        path: 'test',
        component: TestComponent,
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: 'landing',
        component: PanelLandingComponent,
        ...canActivate(redirectUnauthorizedToLogin),
        children: [
          { path: '', redirectTo: 'addLanding', pathMatch: 'full' },
          { path: 'addLanding', component: LandingItemEditorComponent },
          {
            path: 'editLanding/:id',
            component: LandingItemEditorComponent,
            resolve: { landing: LandingResolve }
          },
          { path: 'viewAll', component: LandingAllItemsComponent }
        ]
      },
      {
        path: 'stories',
        component: PanelStoriesComponent,
        ...canActivate(redirectUnauthorizedToLogin),
        children: [
          { path: '', redirectTo: 'addStory', pathMatch: 'full' },
          { path: 'addStory', component: StoriesItemEditorComponent },
          {
            path: 'editStory/:id',
            component: StoriesItemEditorComponent,
            resolve: { story: StoriesResolve }
          },
          { path: 'viewAll', component: StoriesAllItemsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PanelRoutingModule {}
