import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAdminComponent } from './billing-admin.component';

describe('BillingAdminComponent', () => {
  let component: BillingAdminComponent;
  let fixture: ComponentFixture<BillingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
