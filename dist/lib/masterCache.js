"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _user_location = _interopRequireDefault(require("../schema/user_location"));

var _log_user = _interopRequireDefault(require("../schema/log_user"));

var _reviews = _interopRequireDefault(require("../schema/reviews"));

var _geoDistance = _interopRequireDefault(require("geo-distance"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var LOCATION_IDX = {};

var getData =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _nodeFetch["default"])(url).then(function (resp) {
              return resp.json();
            }).then(function (json) {
              return json;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getGeoLocation =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(userAgent) {
    var body, createLog;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getData(process.env.GEO_LOCATION);

          case 3:
            body = _context2.sent;
            _context2.next = 6;
            return createLogUsers(body, userAgent);

          case 6:
            createLog = _context2.sent;
            return _context2.abrupt("return", createLog);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getGeoLocation(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var createLogUsers =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(body, userAgent) {
    var obj;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            obj = _objectSpread({}, body, {
              location: {
                lat: body.latitude,
                lon: body.longitude
              },
              user_agent: {
                browser: userAgent.browser,
                version: userAgent.version,
                os: userAgent.os,
                platform: userAgent.platform,
                source: userAgent.source
              } // console.log({obj});
              // var uLog = new LOGUSER(obj)
              // await uLog.save()

            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createLogUsers(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var loadFirstData =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var getLocation, cacheLocation;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // console.log('ini bisa');
            getLocation =
            /*#__PURE__*/
            function () {
              var _ref5 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _user_location["default"].find({});

                      case 2:
                        return _context4.abrupt("return", _context4.sent);

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function getLocation() {
                return _ref5.apply(this, arguments);
              };
            }();

            cacheLocation =
            /*#__PURE__*/
            function () {
              var _ref6 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee5() {
                var locs, i, loc, location;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return getLocation();

                      case 2:
                        locs = _context5.sent;

                        // console.log({locs});
                        for (i = 0; i < locs.length; i++) {
                          loc = locs[i]; // console.log({loc});

                          location = {
                            lat: loc.location.lat,
                            lon: loc.location.lon
                          };
                          LOCATION_IDX["".concat(loc.userId.id)] = location;
                        }

                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function cacheLocation() {
                return _ref6.apply(this, arguments);
              };
            }();

            _context6.next = 4;
            return cacheLocation();

          case 4:
            console.log({
              LOCATION_IDX: LOCATION_IDX
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function loadFirstData() {
    return _ref4.apply(this, arguments);
  };
}();

var createUserLocation =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(body, udata) {
    var checkUser, obj, location, uLoc;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _user_location["default"].findOne({
              userId: _mongoose["default"].Types.ObjectId(udata.id)
            });

          case 2:
            checkUser = _context7.sent;
            console.log({
              udata: udata,
              checkUser: checkUser,
              body: body
            });
            obj = _objectSpread({}, body, {
              userId: udata.id,
              updatedAt: Date.now()
            });
            location = {
              lat: body.location.lat,
              lon: body.location.lon
            };

            if (!checkUser) {
              _context7.next = 12;
              break;
            }

            _context7.next = 9;
            return _user_location["default"].findByIdAndUpdate(checkUser.id, obj);

          case 9:
            // console.log({userId:obj.userId});
            LOCATION_IDX["".concat(obj.userId)] = location;
            _context7.next = 16;
            break;

          case 12:
            uLoc = new _user_location["default"](obj);
            _context7.next = 15;
            return uLoc.save();

          case 15:
            LOCATION_IDX["".concat(obj.userId)] = location;

          case 16:
            return _context7.abrupt("return", true);

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function createUserLocation(_x5, _x6) {
    return _ref7.apply(this, arguments);
  };
}();

var getVehiclesByRadius =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(udata, vehicles) {
    var resp, ii, vehicle, userAddrs, compAddrs, dstc;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            resp = [];
            ii = 0;

          case 2:
            if (!(ii < vehicles.length)) {
              _context8.next = 13;
              break;
            }

            vehicle = vehicles[ii]; // console.log({vehicle});

            userAddrs = LOCATION_IDX["".concat(udata.id)];
            compAddrs = {
              lat: vehicle.companyId.company_address.lat,
              lon: vehicle.companyId.company_address.lon
            };
            _context8.next = 8;
            return _geoDistance["default"].between(userAddrs, compAddrs);

          case 8:
            dstc = _context8.sent;

            if (dstc < (0, _geoDistance["default"])('10 km')) {
              console.log({
                userAddrs: userAddrs,
                compAddrs: compAddrs,
                distnc: dstc
              }); // return vehicle

              resp.push(vehicle);
            }

          case 10:
            ii++;
            _context8.next = 2;
            break;

          case 13:
            return _context8.abrupt("return", resp);

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function getVehiclesByRadius(_x7, _x8) {
    return _ref8.apply(this, arguments);
  };
}();

var getReviews =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(vehicleId) {
    var datas, result, avg, i, data;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _reviews["default"].find({
              vehicleId: _mongoose["default"].Types.ObjectId(vehicleId)
            });

          case 2:
            datas = _context9.sent;
            result = 0;
            avg = 0;

            for (i = 0; i < datas.length; i++) {
              data = datas[i];
              result += data.rating;
              avg = i + 1;
            }

            console.log({
              total: result / avg
            });
            return _context9.abrupt("return", {
              reviewsData: datas,
              totalRating: result / avg
            });

          case 8:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function getReviews(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

var getLocationIdx = function getLocationIdx() {
  return LOCATION_IDX;
};

module.exports = {
  loadFirstData: loadFirstData,
  createUserLocation: createUserLocation,
  getLocationIdx: getLocationIdx,
  getGeoLocation: getGeoLocation,
  getVehiclesByRadius: getVehiclesByRadius,
  getReviews: getReviews
};