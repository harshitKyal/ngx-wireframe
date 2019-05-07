import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLotComponent } from './view-lot.component';

describe('ViewLotComponent', () => {
  let component: ViewLotComponent;
  let fixture: ComponentFixture<ViewLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
