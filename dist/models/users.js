"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var users = _mongoose["default"].Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  }
});

users.statics.toApiUserSchema = function (data) {
  return data.map(function (user) {
    return {
      id: user.id,
      username: user.username
    };
  });
};

module.exports = _mongoose["default"].model('users', users);