import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLotComponent } from './add-edit-lot.component';

describe('AddEditLotComponent', () => {
  let component: AddEditLotComponent;
  let fixture: ComponentFixture<AddEditLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
