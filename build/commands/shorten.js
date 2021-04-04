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
    var _yield$fetch$then, url, embed, response;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _nodeFetch.default)('https://api.zws.im/', {
              method: 'POST',
              body: JSON.stringify({
                url: args.join(' ')
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(function (res) {
              return res.json();
            });

          case 3:
            _yield$fetch$then = _context.sent;
            url = _yield$fetch$then.url;
            embed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle("Shortened URL").addField("URL", url || 'UNKNOWN').setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));
            _context.next = 8;
            return message.channel.send(embed);

          case 8:
            _context.next = 17;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            _context.next = 14;
            return message.channel.send('An error occurred!');

          case 14:
            response = _context.sent;
            _context.next = 17;
            return response.delete({
              timeout: 30000
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;