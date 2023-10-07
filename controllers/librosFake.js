const librosFake = require('../data/libros');
const userfake = require('../data/user');

//obtener todos
const getTodos = (req, res) => {
    res.json(librosFake);
}

//obtener por ID
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

//Agregar
const agregar = (req, res) => {
    const { nombre, autor, editorial, descripcion, numero_pag, img, link_descarga } = req.body;

    const data = {
        _id: librosFake.length + 1,
        ...req.body // Operador spread
    }
    librosFake.push(data);
    res.status(201).json(data);
}

//Editar
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

//Borrar
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

//login
const login = (req, res) => {
    const { usuario, pass } = req.body;
    const uservalido = userfake.find(u => u.usuario === usuario && u.contraseña === pass);
    if (uservalido) {
        res.json({
            msg: 'inicio exitoso'
        })
    } else {
        res.json({
            msg: 'error'
        })
    }
}

//Exportar funciones
module.exports = {
    getTodos,
    getByID,
    agregar,
    editar,
    borrar,
    login
}