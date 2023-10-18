const autoresFake = require("../data/authors")

const getTodos = (req, res) => {
    res.json(autoresFake);
}

const getByname = (req, res) => {
    let { nombre } = req.body;
    nombre = nombre.toLowerCase()
    const autor = autoresFake.filter(z => z.nombre.toLowerCase().includes(nombre));
    if (autor) {
        res.json(autor);
    } else {
        res.status(404).json({
            nombre,
            encontrado: false
        })
    }
}

module.exports = {
    getTodos,
    getByname
}