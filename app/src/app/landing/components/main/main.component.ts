import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
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
