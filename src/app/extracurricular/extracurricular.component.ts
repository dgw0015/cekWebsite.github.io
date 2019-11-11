import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extracurricular',
  templateUrl: './extracurricular.component.html',
  styleUrls: ['./extracurricular.component.scss']
})
export class ExtracurricularComponent implements OnInit {
  winterBg: string;
  sorority: string;
  emerge: string;

  constructor() {
    this.winterBg = './assets/images/extraBg.png';
    this.sorority = './assets/images/sorority 1.jpeg';
    this.emerge = './assets/images/emerge.png';
  }

  ngOnInit() {
  }

}
