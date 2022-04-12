import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [fadeInAnimation],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
