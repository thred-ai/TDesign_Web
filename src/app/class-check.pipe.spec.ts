import { ClassCheckPipe } from './class-check.pipe';

describe('ClassCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new ClassCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
