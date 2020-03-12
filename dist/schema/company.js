"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var sch = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    autopopulate: {
      select: 'first_name last_name address telp email'
    },
    ref: 'users'
  },
  company: {
    type: String,
    required: true
  },
  company_address: {
    lat: {
      type: String,
      required: true
    },
    lon: {
      type: String,
      required: true
    }
  },
  company_email: {
    type: String,
    required: true
  },
  company_telp: {
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
sch.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('company', sch);