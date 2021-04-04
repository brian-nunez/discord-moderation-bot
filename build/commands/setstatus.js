"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _BotState = _interopRequireDefault(require("../utils/BotState"));

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(config, client, message, args) {
    var response, statusMap, status;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = null;

            if (!(message.author.id !== config.ownerID)) {
              _context.next = 20;
              break;
            }

            if (!_BotState.default.getAllowDevelopers()) {
              _context.next = 14;
              break;
            }

            if (message.member.roles.cache.find(function (r) {
              return r.name === config.roles.dev;
            })) {
              _context.next = 12;
              break;
            }

            _context.next = 6;
            return message.channel.send("Insufficient permissions (Requires permission `Owner` or `".concat(config.roles.dev, "`)"));

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.delete({
              timeout: 30000
            });

          case 9:
            return _context.abrupt("return");

          case 12:
            _context.next = 20;
            break;

          case 14:
            _context.next = 16;
            return message.channel.send("Insufficient permissions (Requires permission `Owner`)");

          case 16:
            response = _context.sent;
            _context.next = 19;
            return response.delete({
              timeout: 30000
            });

          case 19:
            return _context.abrupt("return");

          case 20:
            statusMap = {
              online: 'online',
              idle: 'idle',
              invisible: 'invisible',
              offline: 'invisible',
              dnd: 'dnd',
              'do not disturb': 'dnd'
            };
            status = statusMap[args[0]] || null;

            if (status) {
              _context.next = 29;
              break;
            }

            _context.next = 25;
            return message.channel.send("Must be one of these [".concat(Object.keys(statusMap).join(', '), "]"));

          case 25:
            response = _context.sent;
            _context.next = 28;
            return response.delete({
              timeout: 30000
            });

          case 28:
            return _context.abrupt("return");

          case 29:
            client.user.setStatus(status);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;