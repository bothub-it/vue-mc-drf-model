"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validation = require("vue-mc/validation");

var _default = function _default(description) {
  var validation;

  switch (description.type) {
    case 'string':
      validation = _validation.string;
      break;

    case 'integer':
      validation = _validation.integer;
      break;

    case 'boolean':
      validation = _validation.boolean;
      break;

    case 'email':
      validation = _validation.email;
      break;

    default:
      throw new Error("".concat(description.type, " is a invalid type."));
  }

  if (description.required) {
    validation = validation.and(_validation.required);
  }

  if (description.min) {
    validation = validation.and((0, _validation.min)(description.min));
  }

  if (description.length) {
    validation = validation.and((0, _validation.length)(description.length.min, description.length.max));
  }

  if (description.max_length) {
    validation = validation.and((0, _validation.max)(description.max_length));
  }

  return validation;
};

exports.default = _default;