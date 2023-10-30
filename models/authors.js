const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const { Schema } = mongoose;

const authorSchema = new Schema({
  nombre: { type: String, unique: true, required: true },
  id_autor: mongoose.Types.ObjectId,
  biografia: String,
  nacionalidad: String,
  fecha_de_nacimiento: String
});

const authors = mongoose.model('authors', authorSchema);

module.exports = authors;