import { BufferToBase64Pipe } from './buffer-to-base64.pipe';

describe('BufferToBase64Pipe', () => {
  it('create an instance', () => {
    const pipe = new BufferToBase64Pipe();
    expect(pipe).toBeTruthy();
  });
});
