import mongoose from 'mongoose';
const { Schema } = mongoose;

const authorSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  nombre: {type: String, unique:true, required:true},
  id_autor: mongoose.Types.ObjectId,
  biografia: String,
  nacionalidad: String,
  fecha_de_nacimiento:String
});