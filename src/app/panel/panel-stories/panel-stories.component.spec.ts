import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelStoriesComponent } from './panel-stories.component';

describe('PanelStoriesComponent', () => {
  let component: PanelStoriesComponent;
  let fixture: ComponentFixture<PanelStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
