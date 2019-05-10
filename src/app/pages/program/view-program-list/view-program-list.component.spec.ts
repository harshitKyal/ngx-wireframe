import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProgramListComponent } from './view-program-list.component';

describe('ViewProgramListComponent', () => {
  let component: ViewProgramListComponent;
  let fixture: ComponentFixture<ViewProgramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProgramListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProgramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
