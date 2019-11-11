import {Component, OnInit, Renderer2} from '@angular/core';



@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationBg: string;
  secondBackground: string;
  auburnLogo: string;
  aubie: string;

  constructor(private renderer: Renderer2) {
    this.educationBg = './assets/images/Samford-Hall-Auburn-University.jpg';
    this.auburnLogo = './assets/images/AuburnLogo.png';
    this.secondBackground = './assets/images/rolledToomers.jpg';
    this.aubie = './assets/images/aubie-transparent.png';
  }

  ngOnInit() {
  }


}
