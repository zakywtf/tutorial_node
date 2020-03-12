"use strict";

var _classController = require("../classes/classController");

var _reviewsModel = _interopRequireDefault(require("../model/reviews/reviewsModel"));

var _ctrlHandler = _interopRequireDefault(require("../lib/ctrlHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var model = new _reviewsModel["default"]();
var rtr = (0, _classController.controller)(model);
module.exports = rtr;