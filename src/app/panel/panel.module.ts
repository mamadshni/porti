import { MatModule } from './mat/mat.module';
import { PanelComponent } from './panel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';

import { PanelRoutingModule } from './panel-routing.module';

import { TestComponent } from './test/test.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelLandingComponent } from './panel-landing/panel-landing.component';
import { LandingItemEditorComponent } from './panel-landing/landing-item-editor/landing-item-editor.component';
import { LandingAllItemsComponent } from './panel-landing/landing-all-items/landing-all-items.component';
import { InputDirective } from './directives/input.directive';
import { PanelLoginComponent } from './panel-login/panel-login.component';
import { PanelStoriesComponent } from './panel-stories/panel-stories.component';
import { StoriesItemEditorComponent } from './panel-stories/stories-item-editor/stories-item-editor.component';
import { StoriesAllItemsComponent } from './panel-stories/stories-all-items/stories-all-items.component';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
    ReactiveFormsModule,
    MatModule,
    QuillModule.forRoot()
  ],
  declarations: [
    PanelComponent,
    TestComponent,
    PanelHeaderComponent,
    PanelLandingComponent,
    LandingItemEditorComponent,
    LandingAllItemsComponent,
    PanelLoginComponent,
    InputDirective,
    PanelStoriesComponent,
    StoriesItemEditorComponent,
    StoriesAllItemsComponent
  ],
  exports: [
    PanelComponent,
    TestComponent,
    PanelHeaderComponent,
    PanelLandingComponent,
    LandingItemEditorComponent,
    LandingAllItemsComponent,
    PanelLoginComponent,
    InputDirective,
    PanelStoriesComponent,
    StoriesItemEditorComponent,
    StoriesAllItemsComponent
  ]
})
export class PanelModule {}
