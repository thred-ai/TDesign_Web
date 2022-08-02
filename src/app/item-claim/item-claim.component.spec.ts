import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClaimComponent } from './item-claim.component';

describe('ItemClaimComponent', () => {
  let component: ItemClaimComponent;
  let fixture: ComponentFixture<ItemClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
