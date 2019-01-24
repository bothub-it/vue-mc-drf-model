"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueMc = require("vue-mc");

var _lodash = _interopRequireDefault(require("lodash"));

var _getModelDefinition = _interopRequireDefault(require("./get-model-definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = function _default(attrsDescription) {
  var Model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vueMc.Model;
  var modelDefinition = (0, _getModelDefinition.default)(attrsDescription);

  var DRFModel =
  /*#__PURE__*/
  function (_Model) {
    _inherits(DRFModel, _Model);

    function DRFModel() {
      var _this;

      _classCallCheck(this, DRFModel);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DRFModel).call(this));
      _this.attrs_description = attrsDescription;
      return _this;
    } // eslint-disable-next-line class-methods-use-this


    _createClass(DRFModel, [{
      key: "options",
      value: function options() {
        return {
          validationErrorStatus: 400
        };
      } // eslint-disable-next-line class-methods-use-this

    }, {
      key: "defaults",
      value: function defaults() {
        return _lodash.default.mapValues(modelDefinition.mutations, function (value) {
          return value();
        });
      } // eslint-disable-next-line class-methods-use-this

    }, {
      key: "validation",
      value: function validation() {
        return modelDefinition.validation;
      } // eslint-disable-next-line class-methods-use-this

    }, {
      key: "mutations",
      value: function mutations() {
        return modelDefinition.mutations;
      }
    }]);

    return DRFModel;
  }(Model);

  return DRFModel;
};

exports.default = _default;