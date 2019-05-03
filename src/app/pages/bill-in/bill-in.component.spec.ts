import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillInComponent } from './bill-in.component';

describe('BillInComponent', () => {
  let component: BillInComponent;
  let fixture: ComponentFixture<BillInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
