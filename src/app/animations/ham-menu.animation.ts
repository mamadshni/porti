import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger
} from '@angular/animations';

const cubic = 'ease-in-out';
const duration = 250;
const delay = 20;

export const hamMenuAnimation = trigger('hamMenuAnimation', [
  transition(':enter', [
    style({
      opacity: 0
    }),

    query(
      '[hamMenu]',
      style({
        transform: 'translateX(100%)'
      })
    ),

    query(
      '[hamMenuItem]',
      style({
        transform: 'translateX(100%)',
        opacity: 0
      })
    ),

    animate(`${duration}ms ${cubic}`, style('*')),

    query('[hamMenu]', animate(`${duration}ms ${cubic}`, style('*'))),

    query(
      '[hamMenuItem]',
      stagger('80ms', animate(`100ms ${cubic}`, style('*')))
    )
  ]),

  transition(':leave', [
    query(
      '[hamMenuItem]',
      stagger(
        '70ms',
        animate(
          `100ms ${cubic}`,
          style({
            transform: 'translateX(100%)',
            opacity: 0
          })
        )
      )
    ),

    query(
      '[hamMenu]',
      animate(
        `${duration}ms ${cubic}`,
        style({
          transform: 'translateX(100%)'
        })
      )
    ),

    animate(
      `${duration}ms ${cubic}`,
      style({
        opacity: 0
      })
    )
  ])
]);
