"use strict";

var _express = require("express");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _users = _interopRequireDefault(require("../models/users"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var router = (0, _express.Router)();
router.route('/').post(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var user, payload;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _users["default"].findOne({
              username: req.body.username
            }).exec();

          case 3:
            user = _context.sent;
            payload = {
              id: user.id,
              username: user.username
            };

            if (user) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              error: 1,
              message: "The username does not exist"
            }));

          case 7:
            if (_bcryptjs["default"].compareSync(req.body.password + process.env.SALT, user.password)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              error: 1,
              message: "The password is invalid"
            }));

          case 9:
            _jsonwebtoken["default"].sign({
              payload: payload
            }, process.env.SECRET_KEY, {
              algorithm: 'HS256'
            }, function (err, token) {
              res.json({
                error: 0,
                data: {
                  token: token,
                  payload: payload
                }
              });
            });

            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;