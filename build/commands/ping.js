"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(config, client, message) {
  message.channel.send("Pong **(".concat(Date.now() - message.createdTimestamp, "ms)**"));
};

exports.default = _default;