"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import config from './config.json';
var config = {
  "token": "",
  "prefix": "!",
  "ownerID": "",
  "roles": {
    "muted": "Muted",
    "dev": "Developer"
  },
  "moderation_channel": "",
  "mcserver": {
    "ip": ""
  },
  "footerMessage": ""
};

var _default = function _default() {
  var token = process.env.TOKEN || config.token;
  var prefix = process.env.PREFIX || config.prefix;
  var ownerID = process.env.OWNER_ID || config.ownerID;
  var moderation_channel = process.env.MOD_CHANNEL || config.moderation_channel;
  var mcserverIP = process.env.MC_IP || config.mcserver.ip;
  var footerMessage = process.env.FOOTER_MESSAGE || config.footerMessage;

  var computedConfig = _objectSpread(_objectSpread({}, config), {}, {
    token: token,
    prefix: prefix,
    ownerID: ownerID,
    moderation_channel: moderation_channel,
    mcserver: _objectSpread(_objectSpread({}, config.mcserver), {}, {
      ip: mcserverIP
    }),
    footerMessage: footerMessage
  });

  return computedConfig;
};

exports.default = _default;