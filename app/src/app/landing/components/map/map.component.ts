import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/core/animations/fade-in.animation';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [fadeInAnimation],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
