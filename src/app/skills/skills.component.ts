import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsBg: string;

  constructor() {
    this.skillsBg = './assets/images/skillsBg.png';
  }

  ngOnInit() {
  }

}
