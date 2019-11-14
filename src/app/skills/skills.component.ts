import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsBg: string;
  mobileBg: string;
  resumeDownloadLink: string;
  socialTables: string;
  event3dDesigner: string;

  constructor() {
    this.skillsBg = './assets/images/skillsBg.png';
    this.mobileBg = './assets/mobile-imgs/mobile-roses.png';
    this.resumeDownloadLink = './assets/Charlton Resume updated 10_14_19.pdf';
    this.socialTables = './assets/socialtables diagrams.pdf';
    this.event3dDesigner = './assets/3d Event designer diagram.pdf';
  }

  ngOnInit() {
  }

}
