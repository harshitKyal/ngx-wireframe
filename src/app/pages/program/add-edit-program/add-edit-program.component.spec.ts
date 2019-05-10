import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProgramComponent } from './add-edit-program.component';

describe('AddEditProgramComponent', () => {
  let component: AddEditProgramComponent;
  let fixture: ComponentFixture<AddEditProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
