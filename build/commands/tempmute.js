"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(config, client, message, args) {
    var response, member, roleMuted, _args, user, time, reason, mins;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            response = null;

            if (message.member.hasPermission('MUTE_MEMBERS')) {
              _context2.next = 8;
              break;
            }

            _context2.next = 4;
            return message.channel.send("Insufficient permissions (Requires permission `Mute Members`)");

          case 4:
            response = _context2.sent;
            _context2.next = 7;
            return response.delete({
              timeout: 30000
            });

          case 7:
            return _context2.abrupt("return");

          case 8:
            member = message.mentions.members.first();

            if (member) {
              _context2.next = 16;
              break;
            }

            _context2.next = 12;
            return message.channel.send("You have not mentioned a user");

          case 12:
            response = _context2.sent;
            _context2.next = 15;
            return response.delete({
              timeout: 30000
            });

          case 15:
            return _context2.abrupt("return");

          case 16:
            roleMuted = message.guild.roles.cache.find(function (role) {
              return role.name === config.roles.muted;
            });

            if (roleMuted) {
              _context2.next = 24;
              break;
            }

            _context2.next = 20;
            return message.channel.send("This role does not exist");

          case 20:
            response = _context2.sent;
            _context2.next = 23;
            return response.delete({
              timeout: 30000
            });

          case 23:
            return _context2.abrupt("return");

          case 24:
            if (!member.roles.cache.get(roleMuted.id)) {
              _context2.next = 31;
              break;
            }

            _context2.next = 27;
            return message.channel.send("This user already has the ".concat(roleMuted, " role"));

          case 27:
            response = _context2.sent;
            _context2.next = 30;
            return response.delete({
              timeout: 30000
            });

          case 30:
            return _context2.abrupt("return");

          case 31:
            _args = (0, _slicedToArray2.default)(args, 3), user = _args[0], time = _args[1], reason = _args[2];

            if (!(!time || !reason)) {
              _context2.next = 39;
              break;
            }

            _context2.next = 35;
            return message.channel.send("TempMute Usage1: ".concat(config.prefix, "tempmute <Duration in minutes>m <Reason>"));

          case 35:
            response = _context2.sent;
            _context2.next = 38;
            return response.delete({
              timeout: 30000
            });

          case 38:
            return _context2.abrupt("return");

          case 39:
            if (/^\d+m$/.test(time.trim())) {
              _context2.next = 46;
              break;
            }

            _context2.next = 42;
            return message.channel.send("TempMute Usage2: ".concat(config.prefix, "tempmute <Duration in minutes>m <Reason>"));

          case 42:
            response = _context2.sent;
            _context2.next = 45;
            return response.delete({
              timeout: 30000
            });

          case 45:
            return _context2.abrupt("return");

          case 46:
            mins = Number(time.trim().replace('m', ''));

            if (mins) {
              _context2.next = 54;
              break;
            }

            _context2.next = 50;
            return message.channel.send("TempMute Usage3: ".concat(config.prefix, "tempmute <Duration in minutes>m <Reason>"));

          case 50:
            response = _context2.sent;
            _context2.next = 53;
            return response.delete({
              timeout: 30000
            });

          case 53:
            return _context2.abrupt("return");

          case 54:
            setTimeout( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
              return _regenerator.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return member.roles.remove(roleMuted.id);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), mins * 60 * 1000);
            _context2.next = 57;
            return member.roles.add(roleMuted.id);

          case 57:
            _context2.next = 59;
            return message.channel.send("".concat(roleMuted, " added to ").concat(member.displayName));

          case 59:
            _context2.prev = 59;
            _context2.next = 62;
            return member.voice.setMute(true);

          case 62:
            _context2.next = 66;
            break;

          case 64:
            _context2.prev = 64;
            _context2.t0 = _context2["catch"](59);

          case 66:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[59, 64]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;