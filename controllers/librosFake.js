const librosFake = require('../data/libros');

const getTodos = (req, res) => {
    res.json(librosFake);
}

const getByID = (req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    const libroEncontrado = librosFake.find(ing => ing._id === id);

    if (libroEncontrado) {
        res.json(libroEncontrado);
    } else {
        res.status(404).json({
            id,
            encontrado: false
        })
    }
}

const agregar = (req, res) => {
    const { nombre, autor, editorial, descripcion, numero_pag, img, link_descarga } = req.body;

    const data = {
        _id: librosFake.length + 1,
        ...req.body // Operador spread
    }
    librosFake.push(data);
    res.status(201).json(data);
}

const editar = (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    const { nombre, autor, editorial, descripcion, numero_pag, img, link_descarga } = req.body;

    const libroIdx = librosFake.findIndex(ing => ing._id === id);
    let librosActualizado = {};
    if (libroIdx > -1) {
        librosActualizado = {
            _id: parseInt(id),
            ...req.body
        };
        librosFake[libroIdx] = librosActualizado;
    }
    res.json(librosActualizado);
}

const borrar = (req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    const libroIdx = librosFake.findIndex(ing => ing._id === id);
    let libroBorrado = {};
    if (libroIdx > -1) {
        libroBorrado = librosFake[libroIdx];
        librosFake.splice(libroIdx, 1);
    }

    res.json(libroBorrado);
}

module.exports = {
    getTodos,
    getByID,
    agregar,
    editar,
    borrar
}