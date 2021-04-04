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

var MuteCommand = /*#__PURE__*/function (_Commando$Command) {
  (0, _inherits2.default)(MuteCommand, _Commando$Command);

  var _super = _createSuper(MuteCommand);

  function MuteCommand(client) {
    (0, _classCallCheck2.default)(this, MuteCommand);
    return _super.call(this, client, {
      name: 'mute',
      group: 'moderation',
      memberName: 'mute',
      description: 'Mutes a member',
      examples: ['mute @member', 'mute @member 1m'],
      clientPermissions: ['MUTE_MEMBERS'],
      userPermissions: ['MUTE_MEMBERS'],
      argsType: 'multiple',
      args: [{
        key: 'user',
        prompt: 'Provide user to mute',
        type: 'user'
      }, {
        key: 'time',
        prompt: 'Amount of time to mute (i.e. 1m, 5m, 20m)',
        type: 'string',
        validate: function validate(time) {
          if (time === '') return true;
          return /^\d+m$/.test(time.trim());
        },
        default: ''
      }]
    });
  }

  (0, _createClass2.default)(MuteCommand, [{
    key: "run",
    value: function () {
      var _run = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(message, _ref) {
        var user, time, member, targetRole, mins;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                user = _ref.user, time = _ref.time;
                member = message.guild.member(user);
                targetRole = message.guild.roles.cache.find(function (r) {
                  return r.name === 'Muted';
                });

                if (targetRole) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return message.reply('The role `Muted` doesn\'t exist on this server');

              case 6:
                return _context2.abrupt("return");

              case 7:
                if (!(0, _getRoles.default)(member).get(targetRole.id)) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 10;
                return message.reply("This user already has the ".concat(targetRole, " role"));

              case 10:
                return _context2.abrupt("return");

              case 11:
                _context2.next = 13;
                return member.roles.add(targetRole.id);

              case 13:
                _context2.next = 15;
                return message.reply("".concat(targetRole, " added to ").concat(member));

              case 15:
                _context2.prev = 15;
                _context2.next = 18;
                return member.voice.setMute(true);

              case 18:
                _context2.next = 22;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](15);

              case 22:
                if (!time) {
                  _context2.next = 27;
                  break;
                }

                mins = Number(time.trim().replace('m', ''));
                _context2.next = 26;
                return message.reply("".concat(member, " will be unmuted in ").concat(mins, " minute(s)"));

              case 26:
                (0, _scheduler.default)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return member.roles.remove(targetRole.id);

                        case 3:
                          _context.next = 5;
                          return member.voice.setMute(false);

                        case 5:
                          _context.next = 9;
                          break;

                        case 7:
                          _context.prev = 7;
                          _context.t0 = _context["catch"](0);

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 7]]);
                })), mins * 60 * 1000);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[15, 20]]);
      }));

      function run(_x, _x2) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }]);
  return MuteCommand;
}(_discord.default.Command);

exports.default = MuteCommand;