import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPartyComponent } from './view-party.component';

describe('ViewPartyComponent', () => {
  let component: ViewPartyComponent;
  let fixture: ComponentFixture<ViewPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
