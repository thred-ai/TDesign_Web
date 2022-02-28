import { NetworkCheckPipe } from './network-check.pipe';

describe('NetworkCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new NetworkCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
