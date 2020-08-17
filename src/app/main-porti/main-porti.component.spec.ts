import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPortiComponent } from './main-porti.component';

describe('MainPortiComponent', () => {
  let component: MainPortiComponent;
  let fixture: ComponentFixture<MainPortiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPortiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPortiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
