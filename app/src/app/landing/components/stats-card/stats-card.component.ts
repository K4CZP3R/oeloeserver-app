import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/core/animations/fade-in.animation';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss'],
  animations: [fadeInAnimation],
})
export class StatsCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
