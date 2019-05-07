import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillInComponent } from './view-bill-in.component';

describe('ViewBillInComponent', () => {
  let component: ViewBillInComponent;
  let fixture: ComponentFixture<ViewBillInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBillInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBillInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
