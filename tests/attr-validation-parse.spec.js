/* eslint-env mocha, chai */
import { expect } from 'chai';
import {
  string,
} from 'vue-mc/validation';
import AttrValidationParse from '../src/attr-validation-parse';


describe('AttrValidationParse', () => {
  let validation;
  describe('test string', () => {
    beforeEach(() => {
      validation = AttrValidationParse({ type: 'string' });
    });

    it('is a string validation', () => {
      expect(validation).to.be.equal(string);
    });
  });

  describe('test string and required', () => {
    beforeEach(() => {
      validation = AttrValidationParse({
        type: 'string',
        required: true,
      });
    });

    it('valid value', () => {
      expect(validation('any value')).to.be.true;
    });

    it('invalid value: integer', () => {
      expect(validation(1)).not.to.be.true;
    });

    it('invalid value: blank', () => {
      expect(validation('')).not.to.be.true;
    });
  });

  describe('test integer and required', () => {
    beforeEach(() => {
      validation = AttrValidationParse({
        type: 'number',
        required: true,
      });
    });

    it('valid value', () => {
      expect(validation(3)).to.be.true;
    });

    it('invalid value: string', () => {
      expect(validation('im a bot')).not.to.be.true;
    });

    it('valid value: integer', () => {
      expect(validation(4)).to.be.true;
    });

    it('invalid value: float', () => {
      expect(validation(3.44)).not.to.be.true;
    });

    it('invalid value: blank', () => {
      expect(validation()).not.to.be.true;
    });
  });

  it('invalid type', () => {
    expect(() => {
      AttrValidationParse({ type: 'victor' });
    }).to.throw;
  });
});
