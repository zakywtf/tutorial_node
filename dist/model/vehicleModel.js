"use strict";

var _classModel = _interopRequireDefault(require("../classes/classModel"));

var _vehicles = _interopRequireDefault(require("../schema/vehicles"));

var _masterCache = require("../lib/masterCache");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var vehicleModel =
/*#__PURE__*/
function (_Models) {
  _inherits(vehicleModel, _Models);

  function vehicleModel() {
    _classCallCheck(this, vehicleModel);

    return _possibleConstructorReturn(this, _getPrototypeOf(vehicleModel).call(this, _vehicles["default"]));
  }

  _createClass(vehicleModel, [{
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var datas;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.model.find({});

              case 2:
                datas = _context.sent;
                _context.next = 5;
                return (0, _masterCache.getVehiclesByRadius)(this.udata.payload, datas);

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(id) {
        var datas, reviews, obj;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.model.findById(id);

              case 2:
                datas = _context2.sent;
                _context2.next = 5;
                return (0, _masterCache.getReviews)(id);

              case 5:
                reviews = _context2.sent;
                obj = {
                  vehicles: datas,
                  reviews: reviews
                };
                return _context2.abrupt("return", obj);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getById(_x) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "filterTransmition",
    value: function () {
      var _filterTransmition = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(filter) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.model.find({
                  transmition: filter
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function filterTransmition(_x2) {
        return _filterTransmition.apply(this, arguments);
      }

      return filterTransmition;
    }()
  }, {
    key: "filterTypeVehicle",
    value: function () {
      var _filterTypeVehicle = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(filter) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.model.find({
                  type_vehicle: filter
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function filterTypeVehicle(_x3) {
        return _filterTypeVehicle.apply(this, arguments);
      }

      return filterTypeVehicle;
    }()
  }, {
    key: "filters",
    value: function () {
      var _filters = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(type, transmition) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.model.find({
                  $and: [{
                    type_vehicle: type
                  }, {
                    transmition: transmition
                  }]
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function filters(_x4, _x5) {
        return _filters.apply(this, arguments);
      }

      return filters;
    }()
  }]);

  return vehicleModel;
}(_classModel["default"]);

module.exports = vehicleModel;