import {
  trigger,
  transition,
  query,
  stagger,
  animate,
  style,
} from '@angular/animations';

export const fadeIByI = trigger('fadeIByI', [
  transition('* => *', [
    // each time the binding value changes
    query(':leave', [stagger(25, [animate('0.5s', style({ opacity: 0 }))])], {
      optional: true,
    }),
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger(25, [animate('0.5s', style({ opacity: 1 }))]),
      ],
      { optional: true }
    ),
  ]),
]);
