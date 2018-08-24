const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UtilSchema = new Schema({
  year: Number,
  month: Number,
  kwh: Number,
  bill: Number,
  savings: Number,
});

module.exports = mongoose.model('Util', UtilSchema);
