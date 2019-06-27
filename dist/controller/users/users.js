"use strict";

var _express = require("express");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _users = _interopRequireDefault(require("../../models/users"));

var _user_detail = _interopRequireDefault(require("../../models/user_detail"));

var _validateToken = _interopRequireDefault(require("../../lib/validateToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var router = (0, _express.Router)();
router.route('/').get(
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
                        if (!(body.payload.role == 1)) {
                          _context2.next = 4;
                          break;
                        }

                        _users["default"].find({},
                        /*#__PURE__*/
                        function () {
                          var _ref3 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee(err, log) {
                            var data;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return _users["default"].toApiUserSchema(log);

                                  case 2:
                                    data = _context.sent;
                                    return _context.abrupt("return", res.status(200).send({
                                      error: 0,
                                      data: data
                                    }));

                                  case 4:
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

                        _context2.next = 9;
                        break;

                      case 4:
                        if (!(body.payload.role == 2)) {
                          _context2.next = 8;
                          break;
                        }

                        _user_detail["default"].findOne({
                          user_data: body.payload.id
                        }).populate('user_data').exec(function (err, datas) {
                          if (err) return handleError(err); // console.log('data ===> %s', datas._id, datas.company);

                          return res.status(200).send({
                            error: 0,
                            data: {
                              user_data: {
                                id: datas.user_data._id,
                                username: datas.user_data.username,
                                name: datas.user_data.first_name + ' ' + datas.user_data.last_name,
                                address: datas.user_data.address,
                                telp: datas.user_data.telp,
                                email: datas.user_data.email,
                                role: datas.user_data.role,
                                create_at: datas.user_data.create_at
                              },
                              user_detail: {
                                id: datas._id,
                                company: datas.company,
                                company_address: datas.company_address,
                                company_email: datas.company_email,
                                company_telp: datas.company_telp,
                                start_time_available: datas.start_time_available,
                                end_time_available: datas.end_time_available
                              }
                            }
                          });
                        });

                        _context2.next = 9;
                        break;

                      case 8:
                        return _context2.abrupt("return", res.status(404).send({
                          error: 1,
                          message: 'No token provided.'
                        }));

                      case 9:
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