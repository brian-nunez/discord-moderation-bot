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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BanCommand = /*#__PURE__*/function (_Commando$Command) {
  (0, _inherits2.default)(BanCommand, _Commando$Command);

  var _super = _createSuper(BanCommand);

  function BanCommand(client) {
    (0, _classCallCheck2.default)(this, BanCommand);
    return _super.call(this, client, {
      name: 'ban',
      group: 'moderation',
      memberName: 'ban',
      description: 'Bans a member',
      examples: ['ban @member'],
      clientPermissions: ['BAN_MEMBERS'],
      userPermissions: ['BAN_MEMBERS'],
      argsType: 'multiple',
      args: [{
        key: 'user',
        prompt: 'Provide user to ban',
        type: 'user'
      }, {
        key: 'reason',
        prompt: 'Provide a reason',
        type: 'string',
        default: ''
      }]
    });
  }

  (0, _createClass2.default)(BanCommand, [{
    key: "run",
    value: function () {
      var _run = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(message, _ref) {
        var user, reason, member;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = _ref.user, reason = _ref.reason;
                member = message.guild.member(user);

                if (member.bannable) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return message.reply("".concat(member, " is unbannable!"));

              case 5:
                return _context.abrupt("return");

              case 6:
                if (reason) {
                  _context.next = 12;
                  break;
                }

                _context.next = 9;
                return member.ban();

              case 9:
                _context.next = 11;
                return message.reply("".concat(member, " was banned, no reason was provided"));

              case 11:
                return _context.abrupt("return");

              case 12:
                _context.next = 14;
                return member.ban(reason);

              case 14:
                _context.next = 16;
                return message.reply("".concat(member, " was banned for ").concat(reason));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function run(_x, _x2) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }]);
  return BanCommand;
}(_discord.default.Command);

exports.default = BanCommand;