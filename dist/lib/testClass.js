"use strict";

var _testFunc = require("./testFunc");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var test =
/*#__PURE__*/
function () {
  function test() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';

    _classCallCheck(this, test);

    this.str = str;
    console.log('constructor ', str);
  }

  _createClass(test, [{
    key: "exec",
    value: function exec() {
      console.log('Hello ' + this.str);
    }
  }, {
    key: "delay",
    value: function () {
      var _delay2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ms) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('sebelum delay ', new Date());
                _context.next = 3;
                return (0, _testFunc.delay)(ms);

              case 3:
                console.log('setelah delay ', new Date());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function delay(_x) {
        return _delay2.apply(this, arguments);
      }

      return delay;
    }()
  }]);

  return test;
}();

module.exports = test;