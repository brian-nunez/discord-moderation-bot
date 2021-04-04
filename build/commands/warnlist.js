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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(config, client, message, args) {
    var response, member, warnedMember, _warnedMembers, _embed2, _embed, embed, warnedMembers, _iterator, _step, _loop;

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

            if (!member) {
              _context.next = 22;
              break;
            }

            warnedMember = message.guild.members.cache.find(function (mem) {
              return mem.id === member.id;
            });
            _warnedMembers = _BotState.default.getLogs('warn').filter(function (warn) {
              return warn.memberID === member.id;
            });

            if (!(_warnedMembers.length === 0)) {
              _context.next = 17;
              break;
            }

            _embed2 = new _discord.default.MessageEmbed().setColor('GREEN').setTitle("Member is clean :eyes:").setDescription("This member has not been warned").setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));
            _context.next = 16;
            return message.channel.send(_embed2);

          case 16:
            return _context.abrupt("return");

          case 17:
            _embed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle("Warned Player ".concat(warnedMember.user.username)).setDescription("List of all warnings for member").setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));

            _warnedMembers.forEach(function (warn, idx) {
              _embed.addField("Warn Number ".concat(idx + 1, "."), warn.reason);
            });

            _context.next = 21;
            return message.channel.send(_embed);

          case 21:
            return _context.abrupt("return");

          case 22:
            embed = new _discord.default.MessageEmbed().setColor('GREEN').setDescription("List of all warned members").setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));
            warnedMembers = _BotState.default.getLogs('warn');
            embed.setTitle("".concat(client.user.username, " Warns (").concat(warnedMembers.length, ")"));
            _iterator = _createForOfIteratorHelper(warnedMembers);

            try {
              _loop = function _loop() {
                var warn = _step.value;

                try {
                  var _warnedMember = message.guild.members.cache.find(function (mem) {
                    return mem.id === warn.memberID;
                  });

                  embed.addField("User: ".concat(_warnedMember.user.username), "Reason - ".concat(warn.reason));
                } catch (e) {// Do Nothing
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _context.next = 29;
            return message.channel.send(embed);

          case 29:
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