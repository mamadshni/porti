import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesAllItemsComponent } from './stories-all-items.component';

describe('StoriesAllItemsComponent', () => {
  let component: StoriesAllItemsComponent;
  let fixture: ComponentFixture<StoriesAllItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesAllItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
