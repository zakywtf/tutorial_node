"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var user_detail = Schema({
  user_id: [{
    type: Schema.Types.ObjectId,
    ref: 'users'
  }],
  company: {
    type: String,
    required: true
  },
  start_time_available: {
    type: String,
    required: true
  },
  end_time_available: {
    type: String,
    required: true
  }
});
module.exports = _mongoose["default"].model('user_detail', user_detail);