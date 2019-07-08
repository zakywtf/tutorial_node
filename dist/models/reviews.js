"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var reviews = Schema({
  vehicle_data: {
    type: Schema.Types.ObjectId,
    ref: 'vehicles'
  },
  review_text: String,
  rating: Number,
  user_data: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});
module.exports = _mongoose["default"].model('reviews', reviews);