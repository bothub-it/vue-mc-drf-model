import {
  string,
  required,
  integer,
} from 'vue-mc/validation';


export default (description) => {
  let validation;

  switch (description.type) {
    case 'string':
      validation = string;
      break;

    case 'number':
      validation = integer;
      break;

    default:
      throw new Error(`${description.type} is a invalid type.`);
  }

  if (description.required) {
    validation = validation.and(required);
  }

  return validation;
};
