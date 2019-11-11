import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
    <div id="nav" class="overlay">
      <a href= "javascript:void(0)" class="close-btn"
         (click)="closeNav('nav')">&times;
      </a>
      <img [src]="overlayBg" class="overlay-bg" alt="background for the overlay menu" />

      <img [src]="fog" alt="low floating fog" id="home" />
      <img [src]="fogAbout" alt="low floating fog" id="about" />
      <img [src]="fogEducation" alt="low floating fog" id="education" />
      <img [src]="fogExperience" alt="low floating fog" id="experience" />
      <img [src]="fogExtra" alt="low floating fog" id="extra" />
      <img [src]="fogInterest" alt="low floating fog" id="interest" />
      <img [src]="fogSkills" alt="low floating fog" id="skills" />

      <!-- Navigation when home is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'home'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" id="active"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'home')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'home')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'home')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'home')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'home')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'home')"><h1 class="display-3">Skills</h1></a>
        </div>
      </div>

      <!-- Navigation when about is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'about'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'about')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" id="active"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'about')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'about')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'about')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'about')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'about')"><h1 class="display-3">Skills</h1></a>
        </div>
      </div>

      <!-- Navigation when education is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'education'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'education')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'education')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" id="active"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'education')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'education')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'education')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'education')"><h1 class="display-3">Skills</h1></a>
        </div>
      </div>

      <!-- Navigation when experience is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'experience'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'experience')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'experience')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'experience')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" id="active"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'experience')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'experience')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'experience')"><h1 class="display-3">Skills</h1></a>
        </div>
      </div>

      <!-- Navigation when extracurricular is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'extra'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'extra')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'extra')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'extra')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'extra')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" id="active"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'extra')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'extra')"><h1 class="display-3">Skills</h1></a>
        </div>
      </div>

      <!-- Navigation when interest is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'interest'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'interest')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'interest')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'interest')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'interest')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'interest')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" id="active"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'interest')"><h1 class="display-3">Skills</h1></a>
        </div>
      </div>

      <!-- Navigation when skills is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'skills'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'skills')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'skills')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'skills')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'skills')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'skills')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'skills')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" id="active"><h1 class="display-3">Skills</h1></a>
        </div>
      </div>

      <!-- Navigation when contact is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'contact'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'contact')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'contact')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'contact')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'contact')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'contact')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'contact')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'contact')"><h1 class="display-3">Skills</h1></a>
        </div>
      </div>

    </div>
   <!-- Menu button in the upper left corner. -->
    <div class="topHeader">
      <div class="open-btn" (click)="openNav('nav')"><i class="fas fa-bars"></i> Menu</div>
    </div>
  `,
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  overlayBg: string;
  active: string;
  prevActive: string;
  fog: string;
  fogAbout: string;
  fogEducation: string;
  fogExperience: string;
  fogExtra: string;
  fogInterest: string;
  fogSkills: string;


  constructor(private renderer: Renderer2) {
    this.overlayBg = './assets/images/overlayBg.png';
    this.fog = './assets/images/fog-low.png';
    this.fogAbout = './assets/images/fog-low.png';
    this.fogEducation = './assets/images/fog-low.png';
    this.fogExperience = './assets/images/fog-low.png';
    this.fogExtra = './assets/images/fog-low.png';
    this.fogInterest = './assets/images/fog-low.png';
    this.fogSkills = './assets/images/fog-low.png';
  }

  ngOnInit() {
    this.active = 'home';
  }

  setActive(page: string, prevActive: string): void {
    this.prevActive = prevActive;
    this.active = page;
    this.closeNav('nav');
    this.hideAllNoneActiveClouds(page, prevActive);
  }

  getActive(): string   {
     return this.active;
  }

  closeNav(object: string)  {
    const element: HTMLElement = document.getElementById(object);
    this.renderer.setStyle(element, 'width', '0%');
  }

  openNav(object: string) {
    const element: HTMLElement = document.getElementById(object);
    this.renderer.setStyle(element, 'width', '100%');
  }

  hideAllNoneActiveClouds(activate: string, deactivate: string) {
    // const fogElements: string[] = ['fog', 'fog-home', 'fog-about', 'fog-education', 'fog-experience',
    //   'fog-extra', 'fog-interest', 'fog-skills', 'fog-contact'];
    const activeElement: HTMLElement = document.getElementById(activate);
    this.renderer.setStyle(activeElement, 'visibility', 'visible');

    const nonActiveElement: HTMLElement = document.getElementById(deactivate);
    this.renderer.setStyle(nonActiveElement, 'visibility', 'hidden');
  }

}
