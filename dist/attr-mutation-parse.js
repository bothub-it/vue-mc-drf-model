"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var type = _ref.type;
  return {
    string: String,
    number: Number,
    boolean: Boolean
  }[type];
};

exports.default = _default;