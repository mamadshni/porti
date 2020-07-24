import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './section/landing/landing.component';
import { LandingCardComponent } from './section/landing/landing-card/landing-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HamMenuComponent } from './header/ham-menu/ham-menu.component';
import { AboutComponent } from './section/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    LandingCardComponent,
    HamMenuComponent,
    AboutComponent
  ],
  imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
