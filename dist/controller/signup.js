"use strict";

var _express = require("express");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _users = _interopRequireDefault(require("../models/users"));

var _user_detail = _interopRequireDefault(require("../models/user_detail"));

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
    var user, result_user, user_detail, result_user_detail;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            req.body.password = _bcryptjs["default"].hashSync(req.body.password + process.env.SALT, 10);
            user = new _users["default"](req.body); // console.log(req.body.role);

            _context.next = 5;
            return user.save();

          case 5:
            result_user = _context.sent;

            if (!(req.body.role == 2)) {
              _context.next = 14;
              break;
            }

            user_detail = new _user_detail["default"]({
              user_id: result_user._id,
              company: req.body.company,
              start_time_available: req.body.start_time_available,
              end_time_available: req.body.end_time_available
            });
            _context.next = 10;
            return user_detail.save();

          case 10:
            result_user_detail = _context.sent;
            return _context.abrupt("return", res.status(200).send({
              error: 0,
              data: {
                result_user: result_user,
                user_detail: user_detail
              }
            }));

          case 14:
            return _context.abrupt("return", res.status(200).send({
              error: 0,
              data: result_user
            }));

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;