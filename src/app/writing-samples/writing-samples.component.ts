import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing-samples',
  templateUrl: './writing-samples.component.html',
  styleUrls: ['./writing-samples.component.scss']
})
export class WritingSamplesComponent implements OnInit {
  pen: string;

  constructor() {
    this.pen = './assets/images/writing.png';
  }

  ngOnInit() {
  }

}
