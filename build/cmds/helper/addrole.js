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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AddRoleCommand = /*#__PURE__*/function (_Commando$Command) {
  (0, _inherits2.default)(AddRoleCommand, _Commando$Command);

  var _super = _createSuper(AddRoleCommand);

  function AddRoleCommand(client) {
    (0, _classCallCheck2.default)(this, AddRoleCommand);
    return _super.call(this, client, {
      name: 'addrole',
      aliases: ['ar'],
      group: 'helper',
      memberName: 'addrole',
      description: 'Adds a role to a user',
      examples: ['addrole @member Muted', 'addrole @member Developer'],
      clientPermissions: ['MANAGE_ROLES'],
      userPermissions: ['MANAGE_ROLES'],
      argsType: 'multiple',
      args: [{
        key: 'user',
        prompt: 'Which user do you want the role to be added to?',
        type: 'user'
      }, {
        key: 'role',
        prompt: 'Which role should be added?',
        type: 'string'
      }]
    });
  }

  (0, _createClass2.default)(AddRoleCommand, [{
    key: "run",
    value: function () {
      var _run = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(message, _ref) {
        var user, role, member, targetRole, roles;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = _ref.user, role = _ref.role;
                member = message.guild.member(user);
                targetRole = message.guild.roles.cache.find(function (r) {
                  return r.name === role;
                });

                if (targetRole) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return message.reply("That role doesn't exist!");

              case 6:
                return _context.abrupt("return");

              case 7:
                roles = (0, _getRoles.default)(member);

                if (!roles.get(targetRole.id)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 11;
                return message.reply('That role is already applied!');

              case 11:
                return _context.abrupt("return");

              case 12:
                _context.next = 14;
                return member.roles.add(targetRole.id);

              case 14:
                _context.next = 16;
                return message.reply("Added ".concat(targetRole, " to ").concat(member, "!"));

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
  return AddRoleCommand;
}(_discord.default.Command);

exports.default = AddRoleCommand;