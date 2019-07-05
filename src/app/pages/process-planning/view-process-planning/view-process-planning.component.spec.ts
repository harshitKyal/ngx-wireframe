import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessPlanningComponent } from './view-process-planning.component';

describe('ViewProcessPlanningComponent', () => {
  let component: ViewProcessPlanningComponent;
  let fixture: ComponentFixture<ViewProcessPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProcessPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcessPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
