import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  pageBg: string;

  constructor() {
    this.pageBg = './assets/images/EducationBg.png';
  }

  ngOnInit() {
  }

}
