const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const { Schema } = mongoose;

const UserSchema = new Schema({
  nombre: String, // String is shorthand for {type: String}
  pass: String,
  rol: String,
  mail: String
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;


