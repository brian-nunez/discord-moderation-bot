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

var _clamp = _interopRequireDefault(require("../../utils/clamp"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PurgeCommand = /*#__PURE__*/function (_Commando$Command) {
  (0, _inherits2.default)(PurgeCommand, _Commando$Command);

  var _super = _createSuper(PurgeCommand);

  function PurgeCommand(client) {
    (0, _classCallCheck2.default)(this, PurgeCommand);
    return _super.call(this, client, {
      name: 'purge',
      group: 'helper',
      memberName: 'purge',
      description: 'Deletes a bulk of messages',
      examples: ['purge 5'],
      clientPermissions: ['MANAGE_MESSAGES'],
      userPermissions: ['MANAGE_MESSAGES'],
      argsType: 'multiple',
      args: [{
        key: 'amount',
        prompt: 'Amount of messages to purge (1-100)',
        type: 'integer',
        validate: function validate(num) {
          return (0, _clamp.default)(num, 1, 100);
        }
      }]
    });
  }

  (0, _createClass2.default)(PurgeCommand, [{
    key: "run",
    value: function () {
      var _run = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(message, _ref) {
        var amount;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                amount = _ref.amount;
                _context.next = 3;
                return message.delete();

              case 3:
                _context.next = 5;
                return message.channel.bulkDelete(amount + 1);

              case 5:
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
  return PurgeCommand;
}(_discord.default.Command);

exports.default = PurgeCommand;