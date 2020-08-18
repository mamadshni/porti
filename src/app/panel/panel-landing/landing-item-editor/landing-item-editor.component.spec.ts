import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingItemEditorComponent } from './landing-item-editor.component';

describe('LandingItemEditorComponent', () => {
  let component: LandingItemEditorComponent;
  let fixture: ComponentFixture<LandingItemEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingItemEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingItemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
