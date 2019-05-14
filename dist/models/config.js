"use strict";

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var MongoClient = _mongodb["default"].MongoClient;
var url = "mongodb://localhost:27017";
var dbname = "tutorial_node";
var client;

function connection() {
  return _connection.apply(this, arguments);
}

function _connection() {
  _connection = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (client) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return MongoClient.connect(url);

          case 3:
            client = _context.sent;

          case 4:
            return _context.abrupt("return", {
              db: client.db(dbname),
              client: client
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _connection.apply(this, arguments);
}

function read() {
  return _read.apply(this, arguments);
}

function _read() {
  _read = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var _ref, db, client, collection;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return connection();

          case 2:
            _ref = _context2.sent;
            db = _ref.db;
            client = _ref.client;
            collection = db.collection('log_users');
            _context2.next = 8;
            return collection.find().toArray();

          case 8:
            return _context2.abrupt("return", _context2.sent);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _read.apply(this, arguments);
}

module.exports = {
  connection: connection,
  read: read
};