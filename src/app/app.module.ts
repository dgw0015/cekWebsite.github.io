import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';
import { InterestComponent } from './interest/interest.component';
import { SharedComponent } from './shared/shared.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './skills/skills.component';
import { WritingSamplesComponent } from './writing-samples/writing-samples.component';
import {ScreenSizeService} from './screenSize.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ExtracurricularComponent,
    InterestComponent,
    SharedComponent,
    SkillsComponent,
    WritingSamplesComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule
      ],
  providers: [ScreenSizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
