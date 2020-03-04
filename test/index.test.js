import * as helpers from '../src/index';

describe('Sample tests', () => {
  it('Should be a string', () => {
    const foo = helpers.helloThere();
    foo.should.be.a('string');
  });

  it('Should be 3 characters long', () => {
    const foo = helpers.helloThere();
    foo.should.have.lengthOf(5);
  });

  it('Should have correct message', () => {
    const message = helpers.helloThere();
    message.should.equal('Hello');
  });

  it('Should be 5', () => {
    const list = helpers.reduced();
    list.should.equal(5);
  });
});
