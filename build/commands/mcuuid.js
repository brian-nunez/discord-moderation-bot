"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _discord = _interopRequireDefault(require("discord.js"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(config, client, message, args) {
    var username, response, _yield$fetch$then, name, id, embed, _response;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            username = args[0] || '';

            if (username) {
              _context.next = 9;
              break;
            }

            _context.next = 5;
            return message.channel.send('Please provide a valid username');

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.delete({
              timeout: 30000
            });

          case 8:
            return _context.abrupt("return");

          case 9:
            _context.next = 11;
            return (0, _nodeFetch.default)("https://api.mojang.com/users/profiles/minecraft/".concat(username.trim())).then(function (res) {
              return res.json();
            });

          case 11:
            _yield$fetch$then = _context.sent;
            name = _yield$fetch$then.name;
            id = _yield$fetch$then.id;
            embed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle('UUID Service!').setDescription("Data returned from Mojang").addField('UUID', id).addField('Name', name).setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));
            _context.next = 17;
            return message.channel.send(embed);

          case 17:
            _context.next = 26;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            _context.next = 23;
            return message.channel.send('An error occurred!');

          case 23:
            _response = _context.sent;
            _context.next = 26;
            return _response.delete({
              timeout: 30000
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;