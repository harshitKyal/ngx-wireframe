import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBillInComponent } from './add-edit-bill-in.component';

describe('AddEditBillInComponent', () => {
  let component: AddEditBillInComponent;
  let fixture: ComponentFixture<AddEditBillInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBillInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBillInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
