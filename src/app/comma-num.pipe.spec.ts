import { CommaNumPipe } from './comma-num.pipe';

describe('CommaNumPipe', () => {
  it('create an instance', () => {
    const pipe = new CommaNumPipe();
    expect(pipe).toBeTruthy();
  });
});
