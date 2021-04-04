"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(member) {
  if (!member) return [];
  return member.roles.cache;
};

exports.default = _default;