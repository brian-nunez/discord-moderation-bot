"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(config, client, message, args) {
    var response, member, reason;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = null;

            if (message.member.hasPermission('KICK_MEMBERS')) {
              _context.next = 8;
              break;
            }

            _context.next = 4;
            return message.channel.send("Insufficient permissions (Requires permission `Kick members`)");

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.delete({
              timeout: 30000
            });

          case 7:
            return _context.abrupt("return");

          case 8:
            member = message.mentions.members.first();

            if (member) {
              _context.next = 16;
              break;
            }

            _context.next = 12;
            return message.channel.send("You have not mentioned a user");

          case 12:
            response = _context.sent;
            _context.next = 15;
            return response.delete({
              timeout: 30000
            });

          case 15:
            return _context.abrupt("return");

          case 16:
            if (member.kickable) {
              _context.next = 23;
              break;
            }

            _context.next = 19;
            return message.channel.send("This user is unkickable");

          case 19:
            response = _context.sent;
            _context.next = 22;
            return response.delete({
              timeout: 30000
            });

          case 22:
            return _context.abrupt("return");

          case 23:
            reason = args.slice(1).join(" ");

            if (reason) {
              _context.next = 30;
              break;
            }

            _context.next = 27;
            return member.kick();

          case 27:
            _context.next = 29;
            return message.channel.send("".concat(member.user.tag, " was kicked, no reason was provided"));

          case 29:
            return _context.abrupt("return");

          case 30:
            _context.next = 32;
            return member.kick();

          case 32:
            _context.next = 34;
            return message.channel.send("".concat(member.user.tag, " was kicked for ").concat(reason));

          case 34:
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