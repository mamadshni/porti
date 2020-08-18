import { PanelComponent } from './panel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { PanelRoutingModule } from './panel-routing.module';

import { TestComponent } from './test/test.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelLandingComponent } from './panel-landing/panel-landing.component';
import { LandingItemEditorComponent } from './panel-landing/landing-item-editor/landing-item-editor.component';
import { LandingAllItemsComponent } from './panel-landing/landing-all-items/landing-all-items.component';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    MatButtonModule,
    MatTableModule
  ],
  declarations: [
    PanelComponent,
    TestComponent,
    PanelHeaderComponent,
    PanelLandingComponent,
    LandingItemEditorComponent,
    LandingAllItemsComponent
  ],
  exports: [
    PanelComponent,
    TestComponent,
    PanelHeaderComponent,
    PanelLandingComponent,
    LandingItemEditorComponent,
    LandingAllItemsComponent
  ]
})
export class PanelModule {}
