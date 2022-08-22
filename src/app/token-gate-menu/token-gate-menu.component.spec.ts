import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenGateMenuComponent } from './token-gate-menu.component';

describe('TokenGateMenuComponent', () => {
  let component: TokenGateMenuComponent;
  let fixture: ComponentFixture<TokenGateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenGateMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenGateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
