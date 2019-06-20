import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFabricInComponent } from './view-fabric-in.component';

describe('ViewFabriclInComponent', () => {
  let component: ViewFabricInComponent;
  let fixture: ComponentFixture<ViewFabricInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFabricInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFabricInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
