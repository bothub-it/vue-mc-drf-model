/* eslint-env mocha, chai */
import { expect } from 'chai';
import AttrMutationParse from '../src/attr-mutation-parse';


describe('AttrMutationParse', () => {
  let mutation;

  describe('Type string', () => {
    beforeEach(() => {
      mutation = AttrMutationParse({ type: 'string' });
    });

    it('is a string mutation', () => {
      expect(mutation).to.be.equal(String);
    });
  });
});
