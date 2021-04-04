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
    var response, member, roleMuted;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = null;

            if (message.member.hasPermission('MUTE_MEMBERS')) {
              _context.next = 8;
              break;
            }

            _context.next = 4;
            return message.channel.send("Insufficient permissions (Requires permission `Mute Members`)");

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
            roleMuted = message.guild.roles.cache.find(function (role) {
              return role.name === config.roles.muted;
            });

            if (roleMuted) {
              _context.next = 24;
              break;
            }

            _context.next = 20;
            return message.channel.send("This role does not exist");

          case 20:
            response = _context.sent;
            _context.next = 23;
            return response.delete({
              timeout: 30000
            });

          case 23:
            return _context.abrupt("return");

          case 24:
            if (member.roles.cache.get(roleMuted.id)) {
              _context.next = 31;
              break;
            }

            _context.next = 27;
            return message.channel.send("This user does not have the ".concat(roleMuted, " role"));

          case 27:
            response = _context.sent;
            _context.next = 30;
            return response.delete({
              timeout: 30000
            });

          case 30:
            return _context.abrupt("return");

          case 31:
            _context.next = 33;
            return member.roles.remove(roleMuted.id);

          case 33:
            _context.next = 35;
            return message.channel.send("".concat(roleMuted, " removed from ").concat(member.displayName));

          case 35:
            _context.prev = 35;
            _context.next = 38;
            return member.voice.setMute(false);

          case 38:
            _context.next = 42;
            break;

          case 40:
            _context.prev = 40;
            _context.t0 = _context["catch"](35);

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[35, 40]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;