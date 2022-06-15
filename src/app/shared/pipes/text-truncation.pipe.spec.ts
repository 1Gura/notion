import { TextTruncationPipe } from './text-truncation.pipe';

describe('TextTruncationPipe', () => {
  it('create an instance', () => {
    const pipe = new TextTruncationPipe();
    expect(pipe).toBeTruthy();
  });
});
