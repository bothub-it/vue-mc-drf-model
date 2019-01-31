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

  describe('Type intenger', () => {
    beforeEach(() => {
      mutation = AttrMutationParse({ type: 'integer' });
    });

    it('is a integer mutation', () => {
      expect(mutation).to.be.equal(Number);
    });
  });

  describe('Type boolean', () => {
    beforeEach(() => {
      mutation = AttrMutationParse({ type: 'boolean' });
    });

    it('is a boolean mutation', () => {
      expect(mutation).to.be.equal(Boolean);
    });
  });

  describe('Type email', () => {
    beforeEach(() => {
      mutation = AttrMutationParse({ type: 'email' });
    });

    it('is a email mutation', () => {
      expect(mutation).to.be.equal(String);
    });
  });

  describe('Type choice', () => {
    beforeEach(() => {
      mutation = AttrMutationParse({ type: 'choice' });
    });

    it('is a choice mutation', () => {
      expect(mutation).to.be.equal(String);
    });
  });

  describe('Type date', () => {
    beforeEach(() => {
      mutation = AttrMutationParse({ type: 'date' });
    });

    it('is a date mutation', () => {
      expect(mutation).to.be.equal(Date);
    });
  });

  describe('Type text', () => {
    beforeEach(() => {
      mutation = AttrMutationParse({ type: 'text' });
    });

    it('is a text mutation', () => {
      expect(mutation).to.be.equal(String);
    });
  });
});
