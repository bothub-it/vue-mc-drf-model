/* eslint-env mocha, chai */
import { expect } from 'chai';
import {
  string,
  integer,
} from 'vue-mc/validation';
import AttrValidationParse from '../src/attr-validation-parse';


describe('AttrValidationParse', () => {
  let validation;

  describe('Test string', () => {
    beforeEach(() => {
      validation = AttrValidationParse({ type: 'string' });
    });

    it('is a string validation', () => {
      expect(validation).to.be.equal(string);
    });
  });

  describe('Test string and required', () => {
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

  describe('Test error if length is null', () => {
    beforeEach(() => {
      validation = AttrValidationParse({
        type: 'string',
        length: {
          min: null,
          max: null,
        },
      });
    });

    it('Set string to return error', () => {
      expect(validation('i like eat sushi')).to.throw;
    });
  });

  describe('Test string min and max validation', () => {
    beforeEach(() => {
      validation = AttrValidationParse({
        type: 'string',
        length: {
          min: 0,
          max: 10,
        },
      });
    });

    it('valid value: value between 0 and 10 ', () => {
      expect(validation('i like')).to.be.true;
    });

    it('invalid value: value is not between to 0 and 10 ', () => {
      expect(validation('i like eat pizza')).not.to.be.true;
    });
  });

  describe('Test integer', () => {
    beforeEach(() => {
      validation = AttrValidationParse({
        type: 'integer',
      });
    });

    it('is a intenger validation', () => {
      expect(validation).to.be.equal(integer);
    });
  });

  describe('Test integer and required', () => {
    beforeEach(() => {
      validation = AttrValidationParse({
        type: 'integer',
        required: true,
      });
    });

    it('valid value', () => {
      expect(validation(3)).to.be.true;
    });

    it('invalid value: string', () => {
      expect(validation('im a bot')).not.to.be.true;
    });

    it('invalid value: float', () => {
      expect(validation(3.44)).not.to.be.true;
    });

    it('invalid value: blank', () => {
      expect(validation()).not.to.be.true;
    });
  });

  describe('Test integer min validation', () => {
    beforeEach(() => {
      validation = AttrValidationParse({
        type: 'integer',
        min: 10,
      });
    });

    it('invalid value: less than the minimum value ', () => {
      expect(validation(5)).not.to.be.true;
    });

    it('valid value: more than the minimum value', () => {
      expect(validation(50)).to.be.true;
    });

    it('valid value: equal than the minimum value', () => {
      expect(validation(10)).to.be.true;
    });
  });

  describe('Test boolean', () => {
    beforeEach(() => {
      validation = AttrValidationParse({
        type: 'boolean',
      });
    });

    it('valid boolean value: true', () => {
      expect(validation(true)).to.be.true;
    });

    it('valid boolean value: false', () => {
      expect(validation(true)).to.be.true;
    });

    it('invalid boolean value: string instead boolean', () => {
      expect(typeof validation('im not boolean')).not.to.be.equal('boolean');
    });
  });

  describe('Test Email', () => {
    beforeEach(() => {
      validation = AttrValidationParse({
        type: 'email',
      });
    });

    it('valid email format', () => {
      expect(validation('user@bothub.it')).to.be.true;
    });

    it('invalid email format', () => {
      expect(validation('user@bothub')).not.to.be.true;
    });
  });

  it('invalid type', () => {
    expect(() => {
      AttrValidationParse({ type: 'victor' });
    }).to.throw;
  });
});
