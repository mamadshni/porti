import { hamMenuAnimation } from './../animations/ham-menu.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  animations: [ hamMenuAnimation ]
})
export class HeaderComponent implements OnInit {
  isMenuOppend = false;

  constructor() {}

  ngOnInit(): void {}

  openMenu(): void {
    this.isMenuOppend = !this.isMenuOppend;
  }

  closeMenu(): void {
    this.isMenuOppend = !this.isMenuOppend;
  }
}
