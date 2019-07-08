"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var vehicles = Schema({
  user_data: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  type_vehicle: {
    type: String,
    required: true,
    "enum": ['1', '2']
  },
  name: {
    type: String,
    required: true
  },
  vehicle_number: {
    type: String,
    required: true
  },
  charge_per_day: {
    type: Number,
    required: true
  },
  year: String,
  seat: String,
  color: String,
  fuel: String,
  transmition: String,
  deskripsi: String
});
module.exports = _mongoose["default"].model('vehicles', vehicles);