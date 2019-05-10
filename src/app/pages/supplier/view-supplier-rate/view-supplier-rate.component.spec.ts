import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupplierRateComponent } from './view-supplier-rate.component';

describe('ViewSupplierRateComponent', () => {
  let component: ViewSupplierRateComponent;
  let fixture: ComponentFixture<ViewSupplierRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupplierRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupplierRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
