import {
  trigger,
  style,
  transition,
  animate,
  query,
  group
} from '@angular/animations';

const cubic = 'cubic-bezier(0.65, 0.05, 0.36, 1)';
const duration = 300;
const delay = 200;

export const landingCardAnimation = trigger('cardAnimation', [
  transition(
    ':increment',
    group([
      query(
        ':enter',
        group([
          query(':self', [
            style({
              top: '100%',
              opacity: 0
            }),
            animate(`${duration}ms ${delay}ms ${cubic}`, style('*'))
          ]),
          query('[cardType]', [
            style({
              transform: 'translateY(200px)'
            }),
            animate(`${duration / 1.5}ms ${delay * 1.5}ms ${cubic}`, style('*'))
          ]),
          query('[cardTitle]', [
            style({
              marginTop: '200px'
            }),
            animate(`${duration / 1.5}ms ${delay * 2}ms ${cubic}`, style('*'))
          ]),
          query('[cardSummery]', [
            style({
              transform: 'translateY(100px)',
              opacity: 0
            }),
            animate(`${duration}ms ${delay * 2.5}ms ${cubic}`, style('*'))
          ])
        ])
      ),
      query(':leave', [
        animate(
          `${duration}ms ${cubic}`,
          style({
            top: '-100%',
            opacity: 0
          })
        )
      ])
    ])
  ),
  transition(
    ':decrement',
    group([
      query(
        ':enter',
        group([
          query(':self', [
            style({
              top: '-100%',
              opacity: 0
            }),
            animate(`${duration}ms ${delay}ms ${cubic}`, style('*'))
          ]),
          query('[cardType]', [
            style({
              transform: 'translateY(200px)'
            }),
            animate(`${duration / 1.5}ms ${delay * 1.5}ms ${cubic}`, style('*'))
          ]),
          query('[cardTitle]', [
            style({
              marginTop: '200px'
            }),
            animate(`${duration / 1.5}ms ${delay * 2}ms ${cubic}`, style('*'))
          ]),
          query('[cardSummery]', [
            style({
              transform: 'translateY(100px)',
              opacity: 0
            }),
            animate(`${duration}ms ${delay * 2.5}ms ${cubic}`, style('*'))
          ])
        ])
      ),
      query(':leave', [
        animate(
          `${duration}ms ${cubic}`,
          style({
            top: '100%',
            opacity: 0
          })
        )
      ])
    ])
  )
]);
