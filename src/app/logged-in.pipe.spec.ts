import { LoggedInPipe } from './logged-in.pipe';

describe('LoggedInPipe', () => {
  it('create an instance', () => {
    const pipe = new LoggedInPipe();
    expect(pipe).toBeTruthy();
  });
});
