/* eslint-env mocha, chai */
import { expect } from 'chai';
import getModelDefinition from '../src/get-model-definition';
import stringMockup from './mockups/string.json';


describe('getModel', () => {
  let modelDefinition;

  describe('using mockup string.json', () => {
    beforeEach(() => {
      modelDefinition = getModelDefinition(stringMockup.actions.POST);
    });

    it('has validation', () => {
      expect(modelDefinition.validation).to.be.a('object');
    });

    it('has mutations', () => {
      expect(modelDefinition.mutations).to.be.a('object');
    });

    it('validation.name is a function', () => {
      expect(modelDefinition.validation.name).to.be.a('function');
    });

    it('mutations.name is a function', () => {
      expect(modelDefinition.mutations.name).to.be.a('function');
    });
  });
});
