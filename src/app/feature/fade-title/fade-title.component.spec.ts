import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeTitleComponent } from './fade-title.component';

describe('FadeTitleComponent', () => {
  let component: FadeTitleComponent;
  let fixture: ComponentFixture<FadeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
