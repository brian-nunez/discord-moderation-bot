"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _discord = _interopRequireDefault(require("discord.js"));

var _BotState = _interopRequireDefault(require("../utils/BotState"));

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(config, client, message, args) {
    var response, member, amountRemoved, _embed, extraChar, embed, modChannel;

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
            return message.channel.send("Must provide a member to unwarn");

          case 12:
            response = _context.sent;
            _context.next = 15;
            return response.delete({
              timeout: 30000
            });

          case 15:
            return _context.abrupt("return");

          case 16:
            amountRemoved = _BotState.default.remove('warn', member.id);

            if (!(amountRemoved === 0)) {
              _context.next = 21;
              break;
            }

            _embed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle("".concat(member.user.username, " was not warned")).setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));
            message.channel.send(_embed);
            return _context.abrupt("return");

          case 21:
            extraChar = amountRemoved > 1 ? 's' : '';
            embed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle("Removed ".concat(amountRemoved, " Warning Message").concat(extraChar, " for ").concat(member.user.username)).setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));
            _context.next = 25;
            return message.guild.channels.cache.find(function (channel) {
              return channel.id === config.moderation_channel;
            });

          case 25:
            modChannel = _context.sent;
            _context.next = 28;
            return modChannel.send(embed);

          case 28:
            _context.next = 30;
            return message.channel.send(embed);

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