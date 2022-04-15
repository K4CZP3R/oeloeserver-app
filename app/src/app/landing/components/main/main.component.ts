import { Component, OnInit } from '@angular/core';
import { fadeIByI } from 'src/app/core/animations/fade-ibyi.animation';
import { fadeInAnimation } from 'src/app/core/animations/fade-in.animation';
import { HttpRequestService } from 'src/app/http/services/http-request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [fadeIByI],
})
export class MainComponent implements OnInit {
  constructor(private httpService: HttpRequestService) {}

  clientIp: string = '';

  ngOnInit(): void {
    this.httpService
      .get<{ ip: string }>('https://api.ipify.org?format=json')
      .then((r) => {
        this.clientIp = r.ip;
      });
  }
}
