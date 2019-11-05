import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 name: string;
 portrait: string;
 quoteImg: string;
 homeBg: string;

  constructor() {
    this.name = './assets/images/home-bg.png';
    this.portrait = './assets/images/CEK-transparent.png';
    this.quoteImg = './assets/images/Quote-image.png';
    this.homeBg = './assets/images/home-bg2.png';
  }

  ngOnInit() {
  }

}
