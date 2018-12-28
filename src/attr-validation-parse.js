import {
  string,
  required,
} from 'vue-mc/validation';


export default (description) => {
  let validation;

  switch (description.type) {
    case 'string':
      validation = string;
      break;
    default:
      throw new Error(`${description.type} is a invalid type.`);
  }

  if (description.required) {
    validation = validation.and(required);
  }

  return validation;
};
