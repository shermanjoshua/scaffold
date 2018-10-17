import helloThere from '../src/index';

describe('Sample test', () => {
  it('Should be a string', () => {
    const foo = 'foo';
    foo.should.be.a('string');
  });

  it('Should be 3 characters long', () => {
    const foo = 'foo';
    foo.should.have.lengthOf(3);
  });

  it('Should have correct message', () => {
    const message = helloThere();
    message.should.equal('Hello');
  });
});
