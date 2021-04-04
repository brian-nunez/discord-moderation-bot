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
    var response, _yield$fetch$then, city, country_name, ip, region_name, time_zone, helpEmbed, _response;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(args[0])) {
              _context.next = 8;
              break;
            }

            _context.next = 4;
            return message.channel.send('Please provide a valid IP');

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.delete({
              timeout: 30000
            });

          case 7:
            return _context.abrupt("return");

          case 8:
            _context.next = 10;
            return (0, _nodeFetch.default)("https://freegeoip.app/json/".concat(args[0])).then(function (res) {
              return res.json();
            });

          case 10:
            _yield$fetch$then = _context.sent;
            city = _yield$fetch$then.city;
            country_name = _yield$fetch$then.country_name;
            ip = _yield$fetch$then.ip;
            region_name = _yield$fetch$then.region_name;
            time_zone = _yield$fetch$then.time_zone;
            helpEmbed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle('IP Lookup Service!').setDescription("Public info about ".concat(ip)).addField('Country', country_name || null).addField('City', city || null).addField('Region Name', region_name || null).addField('Time Zone', time_zone || null).setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));
            _context.next = 19;
            return message.channel.send(helpEmbed);

          case 19:
            _context.next = 28;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            _context.next = 25;
            return message.channel.send('IP Lookup Service is down!');

          case 25:
            _response = _context.sent;
            _context.next = 28;
            return _response.delete({
              timeout: 30000
            });

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;