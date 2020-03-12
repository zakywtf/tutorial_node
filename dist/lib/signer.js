"use strict";

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _users = _interopRequireDefault(require("../schema/users"));

var _masterCache = require("../lib/masterCache");

var _sessionHandler = require("../lib/sessionHandler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sign =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(body, userAgent) {
    var user, payload, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return checkUser(body);

          case 2:
            user = _context.sent;

            if (!user) {
              _context.next = 21;
              break;
            }

            _context.next = 6;
            return createPayload(user);

          case 6:
            payload = _context.sent;

            if (!_bcryptjs["default"].compareSync(body.password + process.env.SALT, user.password)) {
              _context.next = 18;
              break;
            }

            _context.next = 10;
            return (0, _masterCache.getGeoLocation)(userAgent);

          case 10:
            _context.next = 12;
            return createToken(payload);

          case 12:
            token = _context.sent;
            _context.next = 15;
            return (0, _sessionHandler.createSession)(token);

          case 15:
            return _context.abrupt("return", _context.sent);

          case 18:
            throw new Error('Wrong password!');

          case 19:
            _context.next = 22;
            break;

          case 21:
            throw new Error('User not found!');

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sign(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var createToken =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(payload) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, rej) {
              _jsonwebtoken["default"].sign({
                payload: payload
              }, process.env.SECRET_KEY, {
                algorithm: 'HS256',
                expiresIn: '1h'
              }, function (err, token) {
                if (err) {
                  rej(err);
                } else {
                  resolve(token);
                }
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createToken(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var checkUser =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(body) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _users["default"].findOne({
              username: body.username
            }).exec();

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function checkUser(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var createPayload =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(user) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", {
              id: user.id,
              username: user.username,
              firstName: user.first_name,
              lastName: user.last_name,
              address: user.address,
              telp: user.telp,
              role: user.role,
              email: user.email
            });

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createPayload(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

module.exports = {
  sign: sign
};