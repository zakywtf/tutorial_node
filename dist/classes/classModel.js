"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Models =
/*#__PURE__*/
function () {
  function Models(model) {
    _classCallCheck(this, Models);

    this.model = model;
    this.udata = false;
  }

  _createClass(Models, [{
    key: "setUdata",
    value: function setUdata(udata) {
      this.udata = udata;
    }
  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.model.find({});

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
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
    key: "getByValue",
    value: function () {
      var _getByValue = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(body) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.model.findOne(body, this.getProjection());

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getByValue(_x) {
        return _getByValue.apply(this, arguments);
      }

      return getByValue;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.model.findById(id);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getById(_x2) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "doConvertParam",
    value: function doConvertParam(body) {
      return body;
    }
  }, {
    key: "convertParam",
    value: function convertParam(body) {
      var updated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!updated) body.createdBy = _mongoose["default"].Types.ObjectId(this.udata.payload.id);
      return this.doConvertParam(body);
    }
  }, {
    key: "convertParamDeleted",
    value: function convertParamDeleted(body) {
      var deleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!deleted) body.deletedBy = _mongoose["default"].Types.ObjectId(this.udata.payload.id), body.deleted = 1, body.deletedAt = Date.now();
      return this.doConvertParam(body);
    }
  }, {
    key: "insert_result",
    value: function insert_result(resp) {
      return resp._id;
    }
  }, {
    key: "update_result",
    value: function update_result(resp) {
      return resp;
    }
  }, {
    key: "delete_result",
    value: function delete_result(resp) {
      return resp;
    }
  }, {
    key: "processFilter",
    value: function processFilter(filter) {
      return filter;
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return '';
    }
  }, {
    key: "insert",
    value: function () {
      var _insert = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(obj) {
        var resp;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log(this.udata.payload);

                if (!(this.udata.payload.level < this.level)) {
                  _context4.next = 3;
                  break;
                }

                throw Error('Anda tidak punya akses untuk menambah data ini!');

              case 3:
                _context4.next = 5;
                return this.model.create(this.convertParam(obj));

              case 5:
                resp = _context4.sent;
                return _context4.abrupt("return", this.insert_result(resp));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function insert(_x3) {
        return _insert.apply(this, arguments);
      }

      return insert;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(id, obj) {
        var resp;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.model.findByIdAndUpdate(id.id, this.convertParam(obj, true));

              case 2:
                resp = _context5.sent;
                return _context5.abrupt("return", this.update_result(resp));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function update(_x4, _x5) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(id, obj) {
        var resp;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.model.findByIdAndUpdate(id.id, this.convertParamDeleted(obj, true));

              case 2:
                resp = _context6.sent;
                return _context6.abrupt("return", this.delete_result(resp));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _delete(_x6, _x7) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "paging",
    value: function () {
      var _paging = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(limit, offset, filter, sort) {
        var data, total;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.model.find(this.processFilter(filter), this.getProjection(), {
                  skip: parseInt(offset),
                  limit: parseInt(limit),
                  sort: sort
                });

              case 2:
                data = _context7.sent;
                _context7.next = 5;
                return this.model.count(filter);

              case 5:
                total = _context7.sent;
                return _context7.abrupt("return", {
                  data: data,
                  total: total
                });

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function paging(_x8, _x9, _x10, _x11) {
        return _paging.apply(this, arguments);
      }

      return paging;
    }()
  }]);

  return Models;
}();

module.exports = Models;