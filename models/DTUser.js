const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const DTUserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: String,
    default: 'online'
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("DTUser", DTUserSchema);