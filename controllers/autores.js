//const autoresFake = require("../data/authors")
const autores = require("../models/authors");
const libros = require("../models/Books");

//obtener todos
const getTodos = async (req, res) => {
  try {
    const autor = await autores.find();
    res.json(autor);

  } catch (e) {
    res.json(e);
  }
};

//obtener por nombre de autor
const getByname = async (req, res) => {
  try {
    let { nombre } = req.body;
    const regex = new RegExp(nombre, "i");
    const autor = await autores.find({ nombre: { $regex: regex } });

    if (autor.length > 0) {
      res.status(200).json(autor);
    } else {
      res.status(404).json({
        nombre,
        encontrado: false,
        msg: "No se encontro un autor con ese nombre",
      });
    }

  } catch (e) {
    res.json(e);
  }

};

//obtener libros por ID de autor
const getByID = async (req, res) => {
  let { id } = req.params;
  try {
    const libroEncontrado = await libros.find({ id_autor: id });
    if (libroEncontrado.length > 0) {
      res.status(200).json(libroEncontrado);
    } else {
      res.status(404).json({
        msg: "No se encontro libro con ese ID de autor",
      });
    }
  } catch (e) {
    res.json(e);
  }
};

module.exports = {
  getTodos,
  getByname,
  getByID,
};
