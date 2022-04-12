import { trigger, transition, style, animate } from '@angular/animations';

export const fadeFromDownAnimation = trigger('fadeFromDownAnimation', [
  transition(':enter', [
    style({ transform: 'translate3d(0, 40px,0)', opacity: 0 }),
    animate('250ms', style({ transform: 'translate3d(0,0,0)', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('250ms', style({ opacity: 0 })),
  ]),
]);
