const reviews = require("../models/reviews");
const jwt = require('jsonwebtoken');

//obtener todos
const getTodos = async (req, res) => {
    const review = await reviews.find().exec();
    res.json(review);
}

//Comentario por usuario
const getByuser = async (req, res) => {
    let { nombre } = req.body;

    const reviewEncontrado = await reviews.find({ usuario: nombre }).exec();

    if (reviewEncontrado.length > 0) {
        res.json(reviewEncontrado);
    } else {
        res.status(404).json({
            nombre,
            encontrado: false,
            msg: "No se encontro comentario"
        })
    }
}

//Agregar comentario
const agregar = async (req, res) => {
    const { nombre_libro, texto_reseña, Calificación } = req.body;
    const token = req.header('x-token');
    const { nombreuser } = jwt.verify(token, process.env.clave);
    //obtener fecha
    const fechaActual = new Date();
    const formato = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const fechaFinal = fechaActual.toLocaleDateString('es-AR', formato)
    const data = new reviews({
        nombre_libro: nombre_libro,
        texto_reseña: texto_reseña,
        Calificación: Calificación,
        Fecha_de_Publicación: fechaFinal,
        usuario: nombreuser
    })
    await data.save().then((ok) => {
        if (ok) {
            res.status(201).json({
                msg: 'se agrego el comentario',
                data
            });
        } else {
            console.log("no se guardo")
        }
    });
}

module.exports = {
    getTodos,
    getByuser,
    agregar
}