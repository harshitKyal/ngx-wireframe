import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourStockComponent } from './colour-stock.component';

describe('ColourStockComponent', () => {
  let component: ColourStockComponent;
  let fixture: ComponentFixture<ColourStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColourStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
