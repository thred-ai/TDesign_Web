import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBuyComponent } from './inventory-buy.component';

describe('InventoryBuyComponent', () => {
  let component: InventoryBuyComponent;
  let fixture: ComponentFixture<InventoryBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
