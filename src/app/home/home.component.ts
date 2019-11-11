import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 portrait: string;
 quoteImg: string;
 homeBg: string;
 clouds: string;
 facebook: string;
 linkedin: string;
 pinterest: string;

  constructor() {
    this.portrait = './assets/images/CEK-transparent.png';
    this.quoteImg = './assets/images/quote.png';
    this.homeBg = './assets/images/Mountains.png';
    this.clouds = './assets/images/clouds.png';
    this.facebook = 'https://www.facebook.com/charlton.kam';
    this.linkedin = 'https://www.linkedin.com/in/charlton-kam-ba81b5176/';
    this.pinterest = 'https://www.pinterest.com/auburnthunder17/';

  }

  ngOnInit() {
  }

}
