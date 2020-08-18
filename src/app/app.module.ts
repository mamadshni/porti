import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './section/landing/landing.component';
import { LandingCardComponent } from './section/landing/landing-card/landing-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HamMenuComponent } from './header/ham-menu/ham-menu.component';
import { AboutComponent } from './section/about/about.component';
import { StoriesComponent } from './section/stories/stories.component';
import { StoryCardComponent } from './section/stories/story-card/story-card.component';
import { FadeTitleComponent } from './feature/fade-title/fade-title.component';
import { MainPortiComponent } from './main-porti/main-porti.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    LandingCardComponent,
    HamMenuComponent,
    AboutComponent,
    StoriesComponent,
    StoryCardComponent,
    FadeTitleComponent,
    MainPortiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
