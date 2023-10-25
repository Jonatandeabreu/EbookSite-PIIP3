//const autoresFake = require("../data/authors")
const autores = require('../models/authors');
const libros = require('../models/Books');

//obtener todos
const getTodos = async (req, res) => {
    const autor = await autores.find().exec();
    res.json(autor);
}

//obtener por nombre de autor
const getByname = async (req, res) => {
    let { nombre } = req.body;
    
    const autor = await autores.find({nombre:nombre}).exec();
   
    if (autor) {
        res.json(autor);
    } else {
        res.status(404).json({
            nombre,
            encontrado: false
        })
    }
}

//obtener libros por ID de autor
const getByID = async (req, res) => {
    let { id } = req.params;
    console.log(id);
    const libroEncontrado = await libros.find({id_autor:id}).exec();
  
    res.json(libroEncontrado);
  };

module.exports = {
    getTodos,
    getByname,
    getByID
}