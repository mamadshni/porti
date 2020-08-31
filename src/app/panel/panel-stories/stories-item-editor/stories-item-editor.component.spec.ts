import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesItemEditorComponent } from './stories-item-editor.component';

describe('StoriesItemEditorComponent', () => {
  let component: StoriesItemEditorComponent;
  let fixture: ComponentFixture<StoriesItemEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesItemEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesItemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
