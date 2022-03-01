import { DateConstructPipe } from './date-construct.pipe';

describe('DateConstructPipe', () => {
  it('create an instance', () => {
    const pipe = new DateConstructPipe();
    expect(pipe).toBeTruthy();
  });
});
