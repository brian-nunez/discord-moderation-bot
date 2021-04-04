"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _discord = _interopRequireDefault(require("discord.js"));

var _BotState = _interopRequireDefault(require("../utils/BotState"));

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(config, client, message, args) {
    var response, _args, _, reasonRaw, reason, member, embed, modChannel;

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
            _args = (0, _toArray2.default)(args), _ = _args[0], reasonRaw = _args.slice(1);
            reason = reasonRaw.join(' ').trim();
            member = message.mentions.members.first();

            if (member) {
              _context.next = 18;
              break;
            }

            _context.next = 14;
            return message.channel.send("You have not mentioned a user");

          case 14:
            response = _context.sent;
            _context.next = 17;
            return response.delete({
              timeout: 30000
            });

          case 17:
            return _context.abrupt("return");

          case 18:
            if (reason) {
              _context.next = 25;
              break;
            }

            _context.next = 21;
            return message.channel.send("Warn Usage: ".concat(config.prefix, "warn <Member> <Reason>"));

          case 21:
            response = _context.sent;
            _context.next = 24;
            return response.delete({
              timeout: 30000
            });

          case 24:
            return _context.abrupt("return");

          case 25:
            _BotState.default.add('warn', {
              memberID: member.id,
              reason: reason
            });

            embed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle("Warned ".concat(member.user.username)).setDescription("Reason: ".concat(reason)).setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));
            _context.next = 29;
            return message.guild.channels.cache.find(function (channel) {
              return channel.id === config.moderation_channel;
            });

          case 29:
            modChannel = _context.sent;
            _context.next = 32;
            return modChannel.send(embed);

          case 32:
            _context.next = 34;
            return message.channel.send(embed);

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