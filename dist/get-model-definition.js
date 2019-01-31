"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attrValidationParse = _interopRequireDefault(require("./attr-validation-parse"));

var _attrMutationParse = _interopRequireDefault(require("./attr-mutation-parse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(attrsDescription) {
  return Object.keys(attrsDescription).reduce(function (current, attrName) {
    var attrDescription = attrsDescription[attrName];
    var validation = (0, _attrValidationParse.default)(attrDescription);
    var mutation = (0, _attrMutationParse.default)(attrDescription);
    Object.assign(current.validation, _defineProperty({}, attrName, validation));
    Object.assign(current.mutations, _defineProperty({}, attrName, mutation));
    return current;
  }, {
    validation: {},
    mutations: {}
  });
};

exports.default = _default;