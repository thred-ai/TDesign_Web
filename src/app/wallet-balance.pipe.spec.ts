import { WalletBalancePipe } from './wallet-balance.pipe';

describe('WalletBalancePipe', () => {
  it('create an instance', () => {
    const pipe = new WalletBalancePipe();
    expect(pipe).toBeTruthy();
  });
});
