import { EventTimestampPipe } from './event-timestamp.pipe';

describe('EventTimestampPipe', () => {
  it('create an instance', () => {
    const pipe = new EventTimestampPipe();
    expect(pipe).toBeTruthy();
  });
});
