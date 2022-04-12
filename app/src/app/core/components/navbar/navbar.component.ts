import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [fadeInAnimation],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  faCoffee = faCoffee;

  ngOnInit(): void {}
}
