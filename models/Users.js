import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  nombre: String, // String is shorthand for {type: String}
  pass: String,
  rol: String,
  mail:String
});