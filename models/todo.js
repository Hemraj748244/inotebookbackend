const mongoose = require('mongoose');
const { todo } = require('node:test');


const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});
module.exports = mongoose.model('USER', todoSchema);
