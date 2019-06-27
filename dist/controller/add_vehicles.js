"use strict";

var _express = require("express");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _vehicles = _interopRequireDefault(require("../models/vehicles"));

var _user_detail = _interopRequireDefault(require("../models/user_detail"));

var _validateToken = _interopRequireDefault(require("../lib/validateToken"));

var _ctrlHandler = _interopRequireDefault(require("../lib/ctrlHandler"));

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
  regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            (0, _validateToken["default"])(req, res,
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(body) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!(body.payload.role == 2)) {
                          _context2.next = 4;
                          break;
                        }

                        _user_detail["default"].findOne({
                          user_data: body.payload.id
                        }).populate('user_data').exec(
                        /*#__PURE__*/
                        function () {
                          var _ref3 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee(err, datas) {
                            var vehicle, result;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!err) {
                                      _context.next = 2;
                                      break;
                                    }

                                    return _context.abrupt("return", handleError(err));

                                  case 2:
                                    vehicle = new _vehicles["default"]({
                                      user_data: datas.user_data._id,
                                      type_vehicle: req.body.type_vehicle,
                                      name: req.body.name,
                                      vehicle_number: req.body.vehicle_number,
                                      charge_per_day: req.body.charge_per_day,
                                      year: req.body.year,
                                      seat: req.body.seat,
                                      color: req.body.color,
                                      fuel: req.body.fuel,
                                      transmition: req.body.transmition,
                                      deskripsi: req.body.deskripsi,
                                      rating: req.body.rating
                                    }); // console.log(req.body.type_vehicle);

                                    _context.next = 5;
                                    return vehicle.save();

                                  case 5:
                                    result = _context.sent;
                                    return _context.abrupt("return", res.status(200).send({
                                      error: 0,
                                      data: result
                                    }));

                                  case 7:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x4, _x5) {
                            return _ref3.apply(this, arguments);
                          };
                        }());

                        _context2.next = 5;
                        break;

                      case 4:
                        return _context2.abrupt("return", res.status(404).send({
                          error: 1,
                          message: 'No token provided.'
                        }));

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;