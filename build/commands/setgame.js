"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _BotState = _interopRequireDefault(require("../utils/BotState"));

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(config, client, message, args) {
    var response, typeMap, _args, action, game, type, presence;

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
            typeMap = {
              PLAYING: 'PLAYING',
              STREAMING: 'STREAMING',
              LISTENING: 'LISTENING',
              WATCHING: 'WATCHING',
              CUSTOM_STATUS: 'CUSTOM_STATUS',
              COMPETING: 'COMPETING'
            };
            _args = (0, _toArray2.default)(args), action = _args[0], game = _args.slice(1);
            type = typeMap[action.toUpperCase()];

            if (type) {
              _context.next = 30;
              break;
            }

            _context.next = 26;
            return message.channel.send("Use a valid action: [".concat(Object.keys(typeMap).map(function (t) {
              return t.toLowerCase();
            }).join(', '), "]"));

          case 26:
            response = _context.sent;
            _context.next = 29;
            return response.delete({
              timeout: 30000
            });

          case 29:
            return _context.abrupt("return");

          case 30:
            presence = {
              activity: {
                name: game.join(' '),
                type: type
              }
            };
            client.user.setPresence(presence);

          case 32:
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