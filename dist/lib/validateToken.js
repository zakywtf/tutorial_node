"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var validateToken =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, callback) {
    var datas, token, decode;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            datas = {
              data: {}
            };
            token = req.headers.token;

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(404).send({
              error: 1,
              message: 'No token provided.'
            }));

          case 4:
            _context.prev = 4;
            decode = _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY, {
              algorithms: "HS256"
            });
            _context.next = 8;
            return callback(decode);

          case 8:
            datas.data = _context.sent;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", res.status(404).send({
              error: 1,
              message: "Token Invalid"
            }));

          case 14:
            return _context.abrupt("return", datas.data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));

  return function validateToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = validateToken;