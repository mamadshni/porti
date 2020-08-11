import {
  trigger,
  style,
  transition,
  animate,
  query,
  group,
  stagger
} from '@angular/animations';

const cubic = 'ease-in-out';
const duration = 270;
const delay = 180;

export const routeTransitionAnimations = trigger('routerAnimation', [
  transition(':increment', [
    group([
      query(
        ':leave',
        [
          style('*'),
          animate(
            `${duration}ms ${cubic}`,
            style({
              position: 'absolute',
              left: 0,
              width: '100%',
              opacity: 0,
              transform: 'translateY(-100vh)'
            })
          )
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'translateY(100vh)'
          }),
          animate(`${duration}ms ${delay}ms ${cubic}`, style('*'))
        ],
        { optional: true }
      )
    ])
  ]),
  transition(':decrement', [
    group([
      query(
        ':leave',
        [
          style('*'),
          animate(
            `${duration}ms ${cubic}`,
            style({
              position: 'absolute',
              left: 0,
              width: '100%',
              opacity: 0,
              transform: 'translateY(100vh)'
            })
          )
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'translateY(-100vh)'
          }),
          animate(`${duration}ms ${delay}ms ${cubic}`, style('*'))
        ],
        { optional: true }
      )
    ])
  ])
]);
