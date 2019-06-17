"use strict";

var _express = require("express");

var _log_user = _interopRequireDefault(require("../models/log_user"));

var _ctrlHandler = _interopRequireDefault(require("../lib/ctrlHandler"));

var _validateToken = _interopRequireDefault(require("../lib/validateToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();
router.route('/').get(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            (0, _validateToken["default"])(req, res,
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(body) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(body.payload.role == 2)) {
                          _context3.next = 4;
                          break;
                        }

                        _log_user["default"].find({},
                        /*#__PURE__*/
                        function () {
                          var _ref3 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee2(err, log) {
                            var data;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return _log_user["default"].toApiLogmodelSchema(log);

                                  case 2:
                                    data = _context2.sent;
                                    (0, _ctrlHandler["default"])(req, res,
                                    /*#__PURE__*/
                                    _asyncToGenerator(
                                    /*#__PURE__*/
                                    regeneratorRuntime.mark(function _callee() {
                                      return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                          switch (_context.prev = _context.next) {
                                            case 0:
                                              return _context.abrupt("return", data);

                                            case 1:
                                            case "end":
                                              return _context.stop();
                                          }
                                        }
                                      }, _callee);
                                    })));

                                  case 4:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function (_x4, _x5) {
                            return _ref3.apply(this, arguments);
                          };
                        }());

                        _context3.next = 9;
                        break;

                      case 4:
                        if (!(body.payload.role != 2)) {
                          _context3.next = 8;
                          break;
                        }

                        return _context3.abrupt("return", res.status(404).send({
                          error: 1,
                          message: 'No token provided.'
                        }));

                      case 8:
                        return _context3.abrupt("return", "ini salah");

                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }()); // 

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()).post(
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var log_user, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            log_user = new _log_user["default"](req.body);
            _context5.next = 4;
            return log_user.save();

          case 4:
            result = _context5.sent;
            res.send(result);
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).json({
              error: _context5.t0.message
            }));

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function (_x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}());
module.exports = router;