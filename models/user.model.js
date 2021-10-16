const { Schema, model } = require('mongoose');

const UserModel = new Schema({
  username: {
    type: String,
    min_length: [6, "Atleast 6 characters."],
    max_length: [12, "Maximum of 12 characters."],
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'Normal'
  }
});

module.exports = model('User', UserModel);