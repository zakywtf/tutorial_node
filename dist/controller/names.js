"use strict";

var _express = require("express");

var _ctrlHandler = _interopRequireDefault(require("../lib/ctrlHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();
var names = ['tes1', 'tes2', 'tes3', 'tes4'];
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
                        return _context.abrupt("return", {
                          nama: names
                        });

                      case 1:
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
router.get('/', function (req, res) {
  res.json({
    page: 'COntroller name'
  });
});
router.get('/:nama', function (req, res) {
  var nm = req.params.nama; // console.log(nama);

  (0, _ctrlHandler["default"])(req, res,
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(body) {
      var i;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < names.length)) {
                _context3.next = 11;
                break;
              }

              console.log(names[i]);

              if (!(nm == names[i])) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", {
                nama: names[i]
              });

            case 7:
              return _context3.abrupt("return", {
                error: error
              });

            case 8:
              i++;
              _context3.next = 1;
              break;

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }()); // res.json({page:'COntroller name', id:id})
});
router.use('/', function (req, res, next) {
  if (true) {
    next();
  } else {
    res.json({
      error: 500,
      message: 'Error wew'
    });
  }
});
module.exports = router;