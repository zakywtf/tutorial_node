"use strict";

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _users = _interopRequireDefault(require("../schema/users"));

var _company = _interopRequireDefault(require("../schema/company"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signup =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(body) {
    var userData, user, cmpny;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body.password = _bcryptjs["default"].hashSync(body.password + process.env.SALT, 10);
            userData = new _users["default"](body); // console.log(body.role);

            _context.next = 4;
            return userData.save();

          case 4:
            user = _context.sent;

            if (!(body.role == 2)) {
              _context.next = 9;
              break;
            }

            cmpny = new _company["default"](_objectSpread({}, body, {
              userId: user._id
            }));
            _context.next = 9;
            return cmpny.save();

          case 9:
            return _context.abrupt("return", true);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signup(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  signup: signup
};