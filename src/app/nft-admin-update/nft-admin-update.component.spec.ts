import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftAdminUpdateComponent } from './nft-admin-update.component';

describe('NftAdminUpdateComponent', () => {
  let component: NftAdminUpdateComponent;
  let fixture: ComponentFixture<NftAdminUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftAdminUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
