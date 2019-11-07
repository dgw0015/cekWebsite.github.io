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
 clouds: string;

  constructor() {
    this.portrait = './assets/images/CEK-transparent.png';
    this.quoteImg = './assets/images/quote.png';
    this.homeBg = './assets/images/Mountains.png';
    this.clouds = './assets/images/clouds.png';
  }

  ngOnInit() {
  }

}
