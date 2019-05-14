"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LogModel = _mongoose["default"].Schema({
  kota: String,
  ip_address: String,
  latitude: String,
  longitude: String,
  browser: String,
  os: String,
  user_agent: String,
  created_at: String
});

module.exports = _mongoose["default"].model('log_users', LogModel);