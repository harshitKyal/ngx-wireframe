import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProcessPlanningComponent } from './add-edit-process-planning.component';

describe('AddEditProcessPlanningComponent', () => {
  let component: AddEditProcessPlanningComponent;
  let fixture: ComponentFixture<AddEditProcessPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditProcessPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProcessPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
