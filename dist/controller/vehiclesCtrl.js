"use strict";

var _classController = require("../classes/classController");

var _vehicleModel = _interopRequireDefault(require("../model/vehicleModel"));

var _ctrlHandler = _interopRequireDefault(require("../lib/ctrlHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var model = new _vehicleModel["default"]();
var rtr = (0, _classController.controller)(model);
rtr.get('/transmition/:filter',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _ctrlHandler["default"])(req, res,
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(body) {
                var filter;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        filter = req.params.filter;
                        _context.next = 3;
                        return model.filterTransmition(filter);

                      case 3:
                        return _context.abrupt("return", _context.sent);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
rtr.get('/type_vehicle/:filter',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            (0, _ctrlHandler["default"])(req, res,
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(body) {
                var filter, udata;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        // model.setUdata(res.locals && res.locals.udata)
                        filter = req.params.filter;
                        udata = res.locals.udata.payload;
                        console.log({
                          res: res,
                          udata: udata
                        });
                        _context3.next = 5;
                        return model.filterTypeVehicle(filter);

                      case 5:
                        return _context3.abrupt("return", _context3.sent);

                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x6) {
                return _ref4.apply(this, arguments);
              };
            }());

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());
rtr.get('/filter/:type/:transmition',
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            (0, _ctrlHandler["default"])(req, res,
            /*#__PURE__*/
            function () {
              var _ref6 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee5(body) {
                var _req$params, type, transmition;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _req$params = req.params, type = _req$params.type, transmition = _req$params.transmition;
                        _context5.next = 3;
                        return model.filters(type, transmition);

                      case 3:
                        return _context5.abrupt("return", _context5.sent);

                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x9) {
                return _ref6.apply(this, arguments);
              };
            }());

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}());
module.exports = rtr;