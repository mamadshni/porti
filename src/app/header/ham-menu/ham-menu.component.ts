import {
  Component,
  OnInit,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-ham-menu',
  templateUrl: './ham-menu.component.html',
  styleUrls: [ './ham-menu.component.scss' ]
})
export class HamMenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter<void>();

  @HostListener('click')
  closeHam(): void {
    this.closeMenu.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
