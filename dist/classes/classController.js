"use strict";

var _express = require("express");

var _ctrlHandler = _interopRequireDefault(require("../lib/ctrlHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function controller(model) {
  var router = (0, _express.Router)();
  router.get('/',
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
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          model.setUdata(res.locals && res.locals.udata);
                          _context.next = 3;
                          return model.getAll();

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
  router.get('/detail/:id',
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
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          model.setUdata(res.locals && res.locals.udata);
                          _context3.next = 3;
                          return model.getById(req.params.id);

                        case 3:
                          return _context3.abrupt("return", _context3.sent);

                        case 4:
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
  router.post('/create',
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
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          model.setUdata(res.locals && res.locals.udata);
                          _context5.next = 3;
                          return model.insert(body);

                        case 3:
                          return _context5.abrupt("return", true);

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
  router.post('/update/:id',
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee8(req, res) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              (0, _ctrlHandler["default"])(req, res,
              /*#__PURE__*/
              function () {
                var _ref8 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee7(body) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          model.setUdata(res.locals && res.locals.udata);
                          _context7.next = 3;
                          return model.update({
                            id: req.params.id
                          }, model.convertParam(body));

                        case 3:
                          return _context7.abrupt("return", true);

                        case 4:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x12) {
                  return _ref8.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x10, _x11) {
      return _ref7.apply(this, arguments);
    };
  }());
  router.post('/delete/:id',
  /*#__PURE__*/
  function () {
    var _ref9 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee10(req, res) {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              (0, _ctrlHandler["default"])(req, res,
              /*#__PURE__*/
              function () {
                var _ref10 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee9(body) {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          model.setUdata(res.locals && res.locals.udata);
                          _context9.next = 3;
                          return model["delete"]({
                            id: req.params.id
                          }, model.convertParamDeleted(body));

                        case 3:
                          return _context9.abrupt("return", true);

                        case 4:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function (_x15) {
                  return _ref10.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x13, _x14) {
      return _ref9.apply(this, arguments);
    };
  }());
  router.get('/paging/:page/:perPage',
  /*#__PURE__*/
  function () {
    var _ref11 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee12(req, res) {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              (0, _ctrlHandler["default"])(req, res,
              /*#__PURE__*/
              function () {
                var _ref12 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee11(body) {
                  var _req$params, page, perPage;

                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          model.setUdata(res.locals && res.locals.udata); // return await model.paging(req.params.limit, req.params.offset, body.filter, body.order)

                          _req$params = req.params, page = _req$params.page, perPage = _req$params.perPage;
                          _context11.next = 4;
                          return model.paging(perPage, (page - 1) * perPage, {}, {
                            createdAt: -1
                          });

                        case 4:
                          return _context11.abrupt("return", _context11.sent);

                        case 5:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                }));

                return function (_x18) {
                  return _ref12.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x16, _x17) {
      return _ref11.apply(this, arguments);
    };
  }());
  return router;
}

module.exports = {
  controller: controller
};