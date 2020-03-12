"use strict";

var _classController = require("../classes/classController");

var _companyModel = _interopRequireDefault(require("../model/company/companyModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var model = new _companyModel["default"]();
var rtr = (0, _classController.controller)(model);
module.exports = rtr;