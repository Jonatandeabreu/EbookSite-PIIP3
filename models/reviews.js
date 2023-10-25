const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  nombre_libro: String, // String is shorthand for {type: String}
  texto_reseña: String,
  Calificación: mongoose.Types.Decimal128,
  Fecha_de_Publicación:String,
  usuario:String
});

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;