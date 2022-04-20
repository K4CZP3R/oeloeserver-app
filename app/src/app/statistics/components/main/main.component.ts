import { Component, OnInit } from '@angular/core';
import { fadeIByI } from 'src/app/core/animations/fade-ibyi.animation';
import { fadeInAnimation } from 'src/app/core/animations/fade-in.animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [fadeInAnimation],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
