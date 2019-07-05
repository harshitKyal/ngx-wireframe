import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessPlanningComponent } from './process-planning.component';

describe('ProcessPlanningComponent', () => {
  let component: ProcessPlanningComponent;
  let fixture: ComponentFixture<ProcessPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
