import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftUpdateComponent } from './nft-update.component';

describe('NftUpdateComponent', () => {
  let component: NftUpdateComponent;
  let fixture: ComponentFixture<NftUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
