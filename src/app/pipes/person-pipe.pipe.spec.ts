import { PersonPipePipe } from './person-pipe.pipe';

describe('PersonPipePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonPipePipe();
    expect(pipe).toBeTruthy();
  });
});
