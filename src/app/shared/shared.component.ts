import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
    <div id="nav" class="overlay">
      <a href= "javascript:void(0)" class="close-btn"
         (click)="closeNav('nav')">&times;
      </a>

      <img [src]="overlayBg" class="overlay-bg" alt="background for the overlay menu" />

      <!-- Navigation when home is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'home'">
        <div class="link" id="top-link">
          <a target="_self" [routerLink]="['/home']" id="active">Home</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/about']" (click)="setActive('about')">About</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/education']" (click)="setActive('education')">Education</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/experience']" (click)="setActive('experience')">Experience</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/extracurricular']" (click)="setActive('extra')">Extracurricular</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/specialAchievements']" (click)="setActive('special')">Special Achievements</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/contact']" (click)="setActive('contact')">Contact</a>
        </div>
      </div>

      <div class="overlay-navLinks" *ngIf="getActive() === 'about'">
        <div class="link" id="top-link">
          <a target="_self" [routerLink]="['/home']" (click)="setActive('home')">Home</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/about']" id="active">About</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/education']" (click)="setActive('education')">Education</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/experience']" (click)="setActive('experience')">Experience</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/extracurricular']" (click)="setActive('extra')">Extracurricular</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/specialAchievements']" (click)="setActive('special')">Special Achievements</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/contact']" (click)="setActive('contact')">Contact</a>
        </div>
      </div>

      <div class="overlay-navLinks" *ngIf="getActive() === 'education'">
        <div class="link" id="top-link">
          <a target="_self" [routerLink]="['/home']" (click)="setActive('home')">Home</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/about']" (click)="setActive('about')">About</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/education']" id="active">Education</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/experience']" (click)="setActive('experience')">Experience</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/extracurricular']" (click)="setActive('extra')">Extracurricular</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/specialAchievements']" (click)="setActive('special')">Special Achievements</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/contact']" (click)="setActive('contact')">Contact</a>
        </div>
      </div>

      <div class="overlay-navLinks" *ngIf="getActive() === 'experience'">
        <div class="link" id="top-link">
          <a target="_self" [routerLink]="['/home']" (click)="setActive('home')">Home</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/about']" (click)="setActive('about')">About</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/education']" (click)="setActive('education')">Education</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/experience']" id="active">Experience</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/extracurricular']" (click)="setActive('extra')">Extracurricular</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/specialAchievements']" (click)="setActive('special')">Special Achievements</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/contact']" (click)="setActive('contact')">Contact</a>
        </div>
      </div>

      <div class="overlay-navLinks" *ngIf="getActive() === 'extra'">
        <div class="link" id="top-link">
          <a target="_self" [routerLink]="['/home']" (click)="setActive('home')">Home</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/about']" (click)="setActive('about')">About</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/education']" (click)="setActive('education')">Education</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/experience']" (click)="setActive('experience')">Experience</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/extracurricular']" id="active">Extracurricular</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/specialAchievements']" (click)="setActive('special')">Special Achievements</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/contact']" (click)="setActive('contact')">Contact</a>
        </div>
      </div>

      <div class="overlay-navLinks" *ngIf="getActive() === 'special'">
        <div class="link" id="top-link">
          <a target="_self" [routerLink]="['/home']" (click)="setActive('home')">Home</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/about']" (click)="setActive('about')">About</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/education']" (click)="setActive('education')">Education</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/experience']" (click)="setActive('experience')">Experience</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/extracurricular']" (click)="setActive('extra')">Extracurricular</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/specialAchievements']" id="active">Special Achievements</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/contact']" (click)="setActive('contact')">Contact</a>
        </div>
      </div>

      <div class="overlay-navLinks" *ngIf="getActive() === 'contact'">
        <div class="link" id="top-link">
          <a target="_self" [routerLink]="['/home']" (click)="setActive('home')">Home</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/about']" (click)="setActive('about')">About</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/education']" (click)="setActive('education')">Education</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/experience']" (click)="setActive('experience')">Experience</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/extracurricular']" (click)="setActive('extra')">Extracurricular</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/specialAchievements']" (click)="setActive('special')">Special Achievements</a>
        </div>
        <div class="link">
          <a target="_self" [routerLink]="['/contact']" id="active">Contact</a>
        </div>
      </div>
    </div>
    <div class="topHeader">
      <div class="open-btn" (click)="openNav('nav')"><i class="fas fa-bars"></i> Menu</div>
    </div>
  `,
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  overlayBg: string;
  active: string;


  constructor(private renderer: Renderer2) {
    this.overlayBg = './assets/images/overlayBg.png';
  }

  ngOnInit() {
    this.active = 'home';
  }

  setActive(page: string): void {
    this.active = page;
    this.closeNav('nav');
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

}
