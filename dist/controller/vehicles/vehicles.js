"use strict";

var _express = require("express");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _vehicles = _interopRequireDefault(require("../../models/vehicles"));

var _user_detail = _interopRequireDefault(require("../../models/user_detail"));

var _validateToken = _interopRequireDefault(require("../../lib/validateToken"));

var _ctrlHandler = _interopRequireDefault(require("../../lib/ctrlHandler"));

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
  regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _validateToken["default"])(req, res,
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(body) {
                var type_vehicles, transmitions, vehicle_data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(req.body.filter);
                        type_vehicles = req.body.filter.type_vehicle;
                        transmitions = req.body.filter.transmition;

                        if (!(type_vehicles == '' && transmitions == '')) {
                          _context.next = 9;
                          break;
                        }

                        _context.next = 6;
                        return _vehicles["default"].find();

                      case 6:
                        vehicle_data = _context.sent;
                        _context.next = 25;
                        break;

                      case 9:
                        if (!(type_vehicles == '')) {
                          _context.next = 15;
                          break;
                        }

                        _context.next = 12;
                        return _vehicles["default"].find({
                          $and: [{
                            $or: [{
                              transmition: transmitions
                            }]
                          }]
                        });

                      case 12:
                        vehicle_data = _context.sent;
                        _context.next = 25;
                        break;

                      case 15:
                        if (!(transmitions == '')) {
                          _context.next = 21;
                          break;
                        }

                        _context.next = 18;
                        return _vehicles["default"].find({
                          $and: [{
                            $or: [{
                              type_vehicle: type_vehicles
                            }]
                          }]
                        });

                      case 18:
                        vehicle_data = _context.sent;
                        _context.next = 25;
                        break;

                      case 21:
                        if (!(type_vehicles != '' && transmitions != '')) {
                          _context.next = 25;
                          break;
                        }

                        _context.next = 24;
                        return _vehicles["default"].find({
                          $and: [{
                            $or: [{
                              type_vehicle: type_vehicles
                            }]
                          }, {
                            $or: [{
                              transmition: transmitions
                            }]
                          }]
                        });

                      case 24:
                        vehicle_data = _context.sent;

                      case 25:
                        return _context.abrupt("return", res.status(200).send({
                          error: 0,
                          data: vehicle_data
                        }));

                      case 26:
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
module.exports = router;