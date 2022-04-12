import { Component, Input, OnInit } from '@angular/core';
import { fadeFromDownAnimation } from '../../animations/fade-from-down.animation';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [fadeInAnimation, fadeFromDownAnimation],
})
export class LoadingComponent implements OnInit {
  constructor() {}
  longerThanExpected = 0;
  @Input() loadingElementName!: string;
  @Input() showLoadingAfter!: number;
  @Input() itsReallySlowAfter!: number;
  @Input() giveUpAfter!: number;

  ngOnInit(): void {
    setTimeout(() => (this.longerThanExpected = 1), this.showLoadingAfter);
    setTimeout(() => (this.longerThanExpected = 2), this.itsReallySlowAfter);
    setTimeout(() => (this.longerThanExpected = 3), this.giveUpAfter);
  }
}
