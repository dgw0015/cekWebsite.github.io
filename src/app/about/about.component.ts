import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  fullPageBg: string;
  aboutBg: string;

  constructor() {
    this.fullPageBg = './assets/images/about-bg.png';
    this.aboutBg = './assets/images/About-background.png';
  }

  ngOnInit() {
  }

}
