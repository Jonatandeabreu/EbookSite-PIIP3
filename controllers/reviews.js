const reviews = require("../models/reviews");
const jwt = require('jsonwebtoken');

//obtener todos
const getTodos = async (req, res) => {
    try {
        const review = await reviews.find().exec();
        res.json(review);
    } catch (e) {
        res.json(e);
    }
}

//Comentario por usuario
const getByuser = async (req, res) => {
    try {
        let { nombre } = req.body;

        const reviewEncontrado = await reviews.find({ usuario: nombre }).exec();

        if (reviewEncontrado.length > 0) {
            res.status(200).json(reviewEncontrado);
        } else {
            res.status(404).json({
                nombre,
                encontrado: false,
                msg: "No se encontro comentario"
            })
        }

    } catch (e) {
        res.json(e);
    }

}

//Agregar comentario
const agregar = async (req, res) => {
    try {
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
                res.status(500).json({
                    msg: 'No se guardo'
                })
            }
        });

    } catch (e) {
        res.json(e);
    }

}

module.exports = {
    getTodos,
    getByuser,
    agregar
}