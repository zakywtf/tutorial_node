"use strict";

var _classController = require("../classes/classController");

var _userModel = _interopRequireDefault(require("../model/userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var model = new _userModel["default"]();
var rtr = (0, _classController.controller)(model);
module.exports = rtr;