import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQualityComponent } from './view-quality.component';

describe('ViewQualityComponent', () => {
  let component: ViewQualityComponent;
  let fixture: ComponentFixture<ViewQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
