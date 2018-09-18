import { UnderscoreEliminatorPipe } from './underscore-eliminator.pipe';

describe('UnderscoreEliminatorPipe', () => {
  it('create an instance', () => {
    const pipe = new UnderscoreEliminatorPipe();
    expect(pipe).toBeTruthy();
  });
});
