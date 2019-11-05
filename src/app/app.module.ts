import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';
import { ContactComponent } from './contact/contact.component';
import { SpecialAchievementsComponent } from './special-achievements/special-achievements.component';
import { SharedComponent } from './shared/shared.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ExtracurricularComponent,
    ContactComponent,
    SpecialAchievementsComponent,
    SharedComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFontAwesomeModule,
      HttpClientModule
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
