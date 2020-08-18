import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAllItemsComponent } from './landing-all-items.component';

describe('LandingAllItemsComponent', () => {
  let component: LandingAllItemsComponent;
  let fixture: ComponentFixture<LandingAllItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingAllItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
