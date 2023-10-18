const reviews = require("../data/reviews")

const getTodos = (req, res) => {
    res.json(reviews);
}

const getByuser = (req, res) => {
    let { nombre } = req.body;
    nombre = nombre.toLowerCase()
    const user = reviews.filter(z => z.usuario.toLowerCase().includes(nombre));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            nombre,
            encontrado: false
        })
    }
}

const agregar = (req, res) => {
    const { nombre_libro, texto_reseña, Calificación, usuario} = req.body;
    let fecha = new Date();
    const data = {
        _id: reviews.length + 1,
        Fecha_de_Publicación: fecha,
        ...req.body // Operador spread
    }
    reviews.push(data);
    res.status(201).json({
        msg:'se agrego el comentario',
        data
    });
}

module.exports = {
    getTodos,
    getByuser,
    agregar
}