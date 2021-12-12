import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllOrderAdminComponent } from './view-all-order-admin.component';

describe('ViewAllOrderAdminComponent', () => {
  let component: ViewAllOrderAdminComponent;
  let fixture: ComponentFixture<ViewAllOrderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllOrderAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllOrderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
