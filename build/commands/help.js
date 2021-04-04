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
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(config, client, message) {
    var helpEmbed, staffEmbed, ownerEmbed;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            helpEmbed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle("".concat(client.user.username, " commands")).setDescription("**Prefix:** ".concat(config.prefix)).addField("`ping`", "Check your bot's ping").addField("`rps`", "Play rock paper scissors").addField("`serverdata`", 'Displays the minecraft servers basic data').addField("`mcuuid`", 'Displays minecraft user uuid Usage: mcuuid <Username>').addField("`joke`", 'Displays a random joke').setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));
            _context.next = 3;
            return message.channel.send(helpEmbed);

          case 3:
            staffEmbed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle("".concat(client.user.username, " commands")).setDescription("Staff Commands").setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));

            if (!(message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission('MANAGE_ROLES') || message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('MUTE_MEMBERS'))) {
              _context.next = 17;
              break;
            }

            if (message.member.hasPermission('KICK_MEMBERS')) {
              staffEmbed.addField("`kick`", "Usage: **".concat(config.prefix, "kick [@User]**\n**").concat(config.prefix, "kick [@User][Reason]**"));
            }

            if (message.member.hasPermission('BAN_MEMBERS')) {
              staffEmbed.addField("`ban`", "Usage: **".concat(config.prefix, "ban [@User]**\n**").concat(config.prefix, "ban [@User][Reason]**"));
            }

            if (message.member.hasPermission('MANAGE_ROLES')) {
              staffEmbed.addField("`add`", "Adds a role to a user \nUsage: **".concat(config.prefix, "add [@User] [Role]**")).addField("`remove`", "Removes a role from a user \nUsage: **".concat(config.prefix, "remove [@User] [Role]**"));
              staffEmbed.addField("`enable`", "Enables the bots commands ".concat(config.prefix, "enable"));
              staffEmbed.addField("`disable`", "Disables the bots commands ".concat(config.prefix, "disable"));
            }

            if (message.member.hasPermission('MANAGE_MESSAGES')) {
              staffEmbed.addField("`purge`", "Clears a number of messages between 2 or 100 \nUsage: **".concat(config.prefix, "purge [number]**"));
            }

            if (message.member.hasPermission('MUTE_MEMBERS')) {
              staffEmbed.addField("`mute`", "Allows you to mute members ".concat(config.prefix, "mute"));
              staffEmbed.addField("`unmute`", "Allows you to unmute members ".concat(config.prefix, "unmute"));
              staffEmbed.addField("`tempmute`", "Allows you to temporarily mute members ".concat(config.prefix, "mute <member> [duration] (reason)"));
              staffEmbed.addField("`warn`", "Allows you to warn members ".concat(config.prefix, "warn <member> <reason>"));
              staffEmbed.addField("`unwarn`", "Allows you to unwarn members ".concat(config.prefix, "unwarn <member>"));
              staffEmbed.addField("`warnlist`", "Lists all warned members and reasons ".concat(config.prefix, "warnlist <optional member>"));
            }

            _context.next = 12;
            return message.channel.send(staffEmbed);

          case 12:
            ownerEmbed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle("".concat(client.user.username, " commands")).setDescription("Owner Commands").setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));

            if (!(message.author.id === config.ownerID || _BotState.default.getAllowDevelopers())) {
              _context.next = 17;
              break;
            }

            if (message.author.id === config.ownerID) {
              ownerEmbed.addField('\`dev\`', 'Allows developers to use any command').addField("`say`", "Have the bot say something").addField("`setavatar`", "Changes the bots avatar").addField("`setname`", "Changes the bots display name").addField("`setstatus`", "Changes the bots status").addField("`setgame`", "Changes the bots game display").addField("`shutdown`", "Shuts down the bot (Manual restart is required)");
            } else if (_BotState.default.getAllowDevelopers() && message.member.roles.cache.find(function (r) {
              return r.name === config.roles.dev;
            })) {
              ownerEmbed.addField("`say`", "Have the bot say something").addField("`setavatar`", "Changes the bots avatar").addField("`setname`", "Changes the bots display name").addField("`setstatus`", "Changes the bots status").addField("`setgame`", "Changes the bots game display").addField("`shutdown`", "Shuts down the bot (Manual restart is required)");
            }

            _context.next = 17;
            return message.channel.send(ownerEmbed);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;