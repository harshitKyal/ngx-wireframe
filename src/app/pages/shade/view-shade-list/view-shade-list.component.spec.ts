import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShadeListComponent } from './view-shade-list.component';

describe('ViewShadeListComponent', () => {
  let component: ViewShadeListComponent;
  let fixture: ComponentFixture<ViewShadeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShadeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
