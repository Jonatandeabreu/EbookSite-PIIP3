const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const { Schema } = mongoose;

const bookSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  nombre: String, // String is shorthand for {type: String}
  id_autor: mongoose.Types.ObjectId,
  editorial: String,
  descripcion: String,
  numero_pag: Number,
  img:String,
  link_descarga:String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

