import { Component, OnInit } from '@angular/core';
import {ScreenSizeService} from '../screenSize.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 portrait: string;
 quoteImg: string;
 quote2: string;
 homeBg: string;
 clouds: string;
 forest: string;


  constructor(private screenService: ScreenSizeService) {
    this.portrait = './assets/images/CEK-transparent.png';
    this.quoteImg = './assets/images/quote.png';
    this.homeBg = './assets/images/Mountains.png';
    this.clouds = './assets/images/clouds.png';
    this.forest = './assets/mobile-imgs/forest.png';
    this.quote2 = './assets/mobile-imgs/quote.png';
  }

  ngOnInit() {

  }


}
