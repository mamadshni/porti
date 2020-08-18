import { LandingAllItemsComponent } from './panel-landing/landing-all-items/landing-all-items.component';
import { LandingItemEditorComponent } from './panel-landing/landing-item-editor/landing-item-editor.component';
import { PanelLandingComponent } from './panel-landing/panel-landing.component';
import { TestComponent } from './test/test.component';
import { PanelComponent } from './panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'landing',
        component: PanelLandingComponent,
        children: [
          { path: '', redirectTo: 'addLanding', pathMatch: 'full' },
          { path: 'addLanding', component: LandingItemEditorComponent },
          { path: 'viewAll', component: LandingAllItemsComponent }
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
