import { Component, OnInit } from '@angular/core';
import { fadeFromDownAnimation } from 'src/app/core/animations/fade-from-down.animation';
import { fadeIByI } from 'src/app/core/animations/fade-ibyi.animation';
import { fadeInAnimation } from 'src/app/core/animations/fade-in.animation';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [fadeFromDownAnimation],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
