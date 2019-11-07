import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {ExtracurricularComponent} from './extracurricular/extracurricular.component';
import {InterestComponent} from './interest/interest.component';
import {SkillsComponent} from './skills/skills.component';


const ROUTES: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'interest',
    component: InterestComponent
  },
  {
    path : 'skills',
    component: SkillsComponent
  },
  {
    path: 'extracurricular',
    component: ExtracurricularComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
