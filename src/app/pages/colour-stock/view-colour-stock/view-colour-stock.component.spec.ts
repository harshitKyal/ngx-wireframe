import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewColourStockComponent } from './view-colour-stock.component';

describe('ViewColourStockComponent', () => {
  let component: ViewColourStockComponent;
  let fixture: ComponentFixture<ViewColourStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewColourStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewColourStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
