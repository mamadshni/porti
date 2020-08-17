import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  OnDestroy
} from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-fade-title',
  templateUrl: './fade-title.component.html',
  styleUrls: [ './fade-title.component.scss' ]
})
export class FadeTitleComponent implements OnInit, OnDestroy {
  listenerFn: () => void;
  compHeight = 0;
  maxTopDis = 120;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.listenerFn = renderer.listen('window', 'scroll', () => {
      if (window.pageYOffset < this.compHeight) {
        const divideResult = window.pageYOffset / this.compHeight;
        const opacityDiff = 1 - window.pageYOffset / this.compHeight;
        const topDiff = this.maxTopDis * divideResult;

        this.el.nativeElement.style.opacity = opacityDiff;
        this.el.nativeElement.style.top = `${topDiff}px`;
      }
    });
  }

  ngOnInit(): void {
    const elemStyles = getComputedStyle(this.el.nativeElement);

    this.compHeight = +elemStyles.height.replace(/\D/g, '');
    this.maxTopDis = +elemStyles.paddingBottom.replace(/\D/g, '');
  }

  ngOnDestroy(): void {
    this.listenerFn();
  }
}
