import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from 'src/app/translate/services/translate.service';
import { fadeFromDownAnimation } from '../../animations/fade-from-down.animation';
import { fadeIByI } from '../../animations/fade-ibyi.animation';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [fadeFromDownAnimation],
})
export class NavbarComponent implements OnInit {
  currentUrl = '';
  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentUrl = val.url;
      }
    });
  }

  changeLanguage() {
    this.translateService.setLanguage(
      this.translateService.getLanguage() === 'en' ? 'nl' : 'en'
    );
  }

  ngOnInit(): void {}
}
