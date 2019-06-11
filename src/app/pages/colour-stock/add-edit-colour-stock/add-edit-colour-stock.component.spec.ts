import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditColourStockComponent } from './add-edit-colour-stock.component';

describe('AddEditColourStockComponent', () => {
  let component: AddEditColourStockComponent;
  let fixture: ComponentFixture<AddEditColourStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditColourStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditColourStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
