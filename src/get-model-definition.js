import attrValidationParse from './attr-validation-parse';
import attrMutationParse from './attr-mutation-parse';


export default attrsDescription => (Object.keys(attrsDescription).reduce(
  (current, attrName) => {
    const attrDescription = attrsDescription[attrName];
    const validation = attrValidationParse(attrDescription);
    const mutation = attrMutationParse(attrDescription);
    Object.assign(
      current.validation,
      {
        [attrName]: validation,
      },
    );
    Object.assign(
      current.mutations,
      {
        [attrName]: mutation,
      },
    );
    return current;
  }, {
    validation: {},
    mutations: {},
  },
));
