"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _discord = _interopRequireDefault(require("discord.js-commando"));

var _getRoles = _interopRequireDefault(require("../../utils/getRoles"));

var _scheduler = _interopRequireDefault(require("../../utils/scheduler"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnmuteCommand = /*#__PURE__*/function (_Commando$Command) {
  (0, _inherits2.default)(UnmuteCommand, _Commando$Command);

  var _super = _createSuper(UnmuteCommand);

  function UnmuteCommand(client) {
    (0, _classCallCheck2.default)(this, UnmuteCommand);
    return _super.call(this, client, {
      name: 'unmute',
      group: 'moderation',
      memberName: 'unmute',
      description: 'Unmutes a member',
      examples: ['unmute @member'],
      clientPermissions: ['MUTE_MEMBERS'],
      userPermissions: ['MUTE_MEMBERS'],
      argsType: 'multiple',
      args: [{
        key: 'user',
        prompt: 'Provide user to mute',
        type: 'user'
      }]
    });
  }

  (0, _createClass2.default)(UnmuteCommand, [{
    key: "run",
    value: function () {
      var _run = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(message, _ref) {
        var user, member, targetRole;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = _ref.user;
                member = message.guild.member(user);
                targetRole = message.guild.roles.cache.find(function (r) {
                  return r.name === 'Muted';
                });

                if (targetRole) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return message.reply('The role `Muted` doesn\'t exist on this server');

              case 6:
                return _context.abrupt("return");

              case 7:
                if ((0, _getRoles.default)(member).get(targetRole.id)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 10;
                return message.reply("This user does not have the ".concat(targetRole, " role"));

              case 10:
                return _context.abrupt("return");

              case 11:
                _context.next = 13;
                return member.roles.remove(targetRole.id);

              case 13:
                _context.next = 15;
                return message.reply("".concat(targetRole, " removed from ").concat(member));

              case 15:
                _context.prev = 15;
                _context.next = 18;
                return member.voice.setMute(false);

              case 18:
                _context.next = 22;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](15);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[15, 20]]);
      }));

      function run(_x, _x2) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }]);
  return UnmuteCommand;
}(_discord.default.Command);

exports.default = UnmuteCommand;