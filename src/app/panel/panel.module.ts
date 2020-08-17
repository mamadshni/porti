import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';

@NgModule({
  imports: [ CommonModule, PanelRoutingModule ],
  declarations: [ PanelComponent, TestComponent, PanelHeaderComponent ],
  exports: [ PanelComponent, TestComponent, PanelHeaderComponent ]
})
export class PanelModule {}
