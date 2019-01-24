import {
  string,
  required,
  integer,
  boolean,
  min,
  length,
  email,
} from 'vue-mc/validation';


export default (description) => {
  let validation;

  switch (description.type) {
    case 'string':
      validation = string;
      break;

    case 'integer':
      validation = integer;
      break;

    case 'boolean':
      validation = boolean;
      break;

    case 'email':
      validation = email;
      break;

    default:
      throw new Error(`${description.type} is a invalid type.`);
  }

  if (description.required) {
    validation = validation.and(required);
  }

  if (description.min) {
    validation = validation.and(min(description.min));
  }

  if (description.length) {
    validation = validation.and(length(description.length.min, description.length.max));
  }

  if (description.max_length) {
    validation = validation.and(length(null, description.max_length));
  }

  return validation;
};
