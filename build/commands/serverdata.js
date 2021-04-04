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
    var response, _yield$fetch$then, _yield$fetch$then$mot, clean, ip, port, software, version, online, _yield$fetch$then$pla, onlinePlayers, maxPlayers, embed, _response;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (config.mcserver && config.mcserver.ip) {
              _context.next = 8;
              break;
            }

            _context.next = 4;
            return message.channel.send('Not Minecraft server data provided in config');

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
            return (0, _nodeFetch.default)("https://api.mcsrvstat.us/2/".concat(config.mcserver.ip)).then(function (res) {
              return res.json();
            });

          case 10:
            _yield$fetch$then = _context.sent;
            _yield$fetch$then$mot = _yield$fetch$then.motd;
            _yield$fetch$then$mot = _yield$fetch$then$mot === void 0 ? {} : _yield$fetch$then$mot;
            clean = _yield$fetch$then$mot.clean, ip = _yield$fetch$then.ip, port = _yield$fetch$then.port, software = _yield$fetch$then.software, version = _yield$fetch$then.version, online = _yield$fetch$then.online, _yield$fetch$then$pla = _yield$fetch$then.players;
            _yield$fetch$then$pla = _yield$fetch$then$pla === void 0 ? {} : _yield$fetch$then$pla;
            onlinePlayers = _yield$fetch$then$pla.online, maxPlayers = _yield$fetch$then$pla.max;
            embed = new _discord.default.MessageEmbed().setColor('GREEN').setTitle("Minecraft server ".concat(config.mcserver.ip)).addField('IP', ip).addField('Is Online', online).setFooter("Created by Derthon#9538".concat(config.footerMessage ? " : ".concat(config.footerMessage) : ''));

            if (online) {
              embed.setDescription("Server is running ".concat(software, " version ").concat(version)).addField('MOTD', clean).addField('Players', "".concat(onlinePlayers, "/").concat(maxPlayers));
            }

            _context.next = 20;
            return message.channel.send(embed);

          case 20:
            _context.next = 29;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            _context.next = 26;
            return message.channel.send('An error occurred!');

          case 26:
            _response = _context.sent;
            _context.next = 29;
            return _response.delete({
              timeout: 30000
            });

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 22]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;