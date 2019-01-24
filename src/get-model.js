import { Model as VueMcModel } from 'vue-mc';
import _ from 'lodash';
import getModelDefinition from './get-model-definition';


export default (attrsDescription, Model = VueMcModel) => {
  const modelDefinition = getModelDefinition(attrsDescription);
  class DRFModel extends Model {
    // eslint-disable-next-line class-methods-use-this
    defaults() {
      return _.mapValues(modelDefinition.mutations, value => value());
    }

    // eslint-disable-next-line class-methods-use-this
    validation() {
      return modelDefinition.validation;
    }

    // eslint-disable-next-line class-methods-use-this
    mutations() {
      return modelDefinition.mutations;
    }
  }
  return DRFModel;
};
