import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[InputFocus]'
})
export class InputDirective implements OnInit {
  @HostBinding('class.isFocused') isFocused = false;

  @HostListener('focus', [ '$event.target' ])
  onFocus(target: any): void {
    this.isFocused = true;
  }
  @HostListener('focusout', [ '$event.target' ])
  onFocusout(target: any): void {
    if (this.el.nativeElement.value === '') {
      this.isFocused = false;
    }
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.el.nativeElement.value !== '') {
      this.isFocused = true;
    }
  }
}
