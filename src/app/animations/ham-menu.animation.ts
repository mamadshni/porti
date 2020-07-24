import {
  trigger,
  style,
  transition,
  animate,
  query,
  group,
  stagger
} from '@angular/animations';

const cubic = 'cubic-bezier(0.65, 0.05, 0.36, 1)';
const duration = 300;
const delay = 200;

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
      stagger('100ms', animate(`150ms ease-in`, style('*')))
    )
  ]),

  transition(':leave', [
    query(
      '[hamMenuItem]',
      stagger(
        '70ms',
        animate(
          `120ms ease-out`,
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
