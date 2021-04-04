"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var BotState = /*#__PURE__*/function () {
  function BotState() {
    (0, _classCallCheck2.default)(this, BotState);
    this.state = {
      disabled: false,
      warn: [],
      allowDevelopers: false
    };
  }

  (0, _createClass2.default)(BotState, [{
    key: "add",
    value: function add(type) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.state[type].push(_objectSpread({
        time: new Date()
      }, data));
    }
  }, {
    key: "remove",
    value: function remove(type, memberID) {
      var originalLength = this.state[type].length;
      var copy = (0, _toConsumableArray2.default)(this.state[type]).filter(function (member) {
        return memberID !== member.memberID;
      });
      this.state[type] = copy;
      return originalLength - copy.length;
    }
  }, {
    key: "getLogs",
    value: function getLogs(type) {
      return this.state[type];
    }
  }, {
    key: "enable",
    value: function enable() {
      this.state.disabled = false;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.state.disabled = true;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this.state.disabled;
    }
  }, {
    key: "setAllowDevelopers",
    value: function setAllowDevelopers(bool) {
      this.state.allowDevelopers = bool;
    }
  }, {
    key: "getAllowDevelopers",
    value: function getAllowDevelopers() {
      return this.state.allowDevelopers;
    }
  }]);
  return BotState;
}();

var _default = new BotState();

exports.default = _default;