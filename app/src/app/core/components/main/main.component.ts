import { Component, OnInit } from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  showMainLoader = false;
  mainLoaderPath: string = '';

  constructor(router: Router) {
    router.events.subscribe((event: any) => {
      if (event instanceof RouteConfigLoadStart) {
        this.mainLoaderPath = event.route.path ? event.route.path : '';
        this.showMainLoader = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.showMainLoader = false;
      }
    });
  }
}
