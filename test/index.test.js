import helloThere from '../src/index';

describe('Sample tests', () => {
  it('Should be a string', () => {
    const foo = helloThere();
    foo.should.be.a('string');
  });

  it('Should be 3 characters long', () => {
    const foo = helloThere();
    foo.should.have.lengthOf(5);
  });

  it('Should have correct message', () => {
    const message = helloThere();
    message.should.equal('Hello');
  });
});
