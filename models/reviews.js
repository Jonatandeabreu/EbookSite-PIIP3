import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  nombre_libro: String, // String is shorthand for {type: String}
  texto_reseña: String,
  Calificación: Double,
  Fecha_de_Publicación:String,
  usuario:String
});