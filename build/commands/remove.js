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
    var response, member, remove, roleRemove;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = null;

            if (message.member.hasPermission('MANAGE_ROLES')) {
              _context.next = 8;
              break;
            }

            _context.next = 4;
            return message.channel.send("Insufficient permissions (Requires permission `Manage roles`)");

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
            remove = args.slice(1).join(" ");

            if (remove) {
              _context.next = 24;
              break;
            }

            _context.next = 20;
            return message.channel.send("You have not specified a role");

          case 20:
            response = _context.sent;
            _context.next = 23;
            return response.delete({
              timeout: 30000
            });

          case 23:
            return _context.abrupt("return");

          case 24:
            roleRemove = message.guild.roles.cache.find(function (role) {
              return role.name === remove;
            });

            if (roleRemove) {
              _context.next = 32;
              break;
            }

            _context.next = 28;
            return message.channel.send("This role does not exist");

          case 28:
            response = _context.sent;
            _context.next = 31;
            return response.delete({
              timeout: 30000
            });

          case 31:
            return _context.abrupt("return");

          case 32:
            if (member.roles.cache.get(roleRemove.id)) {
              _context.next = 39;
              break;
            }

            _context.next = 35;
            return message.channel.send("This user does not have the ".concat(remove, " role"));

          case 35:
            response = _context.sent;
            _context.next = 38;
            return response.delete({
              timeout: 30000
            });

          case 38:
            return _context.abrupt("return");

          case 39:
            _context.next = 41;
            return member.roles.remove(roleRemove.id);

          case 41:
            _context.next = 43;
            return message.channel.send("".concat(remove, " removed from ").concat(member.displayName));

          case 43:
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