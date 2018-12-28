/* eslint-env mocha, chai */
import { expect } from 'chai';
import AttrValidationParse from './attr-validation-parse';


describe('AttrValidationParse', () => {
  it('return null', () => {
    expect(AttrValidationParse()).to.be.null;
  });
});
