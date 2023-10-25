const reviews = require("../models/reviews");

//obtener todos
const getTodos = async (req, res) => {
    const review = await reviews.find().exec();
    res.json(review);
}

//Comentario por usuario
const getByuser = async (req, res) => {
    let { nombre } = req.body;
    
    const reviewEncontrado = await reviews.find({usuario:nombre}).exec();
   
    if (reviewEncontrado) {
        res.json(reviewEncontrado);
    } else {
        res.status(404).json({
            nombre,
            encontrado: false
        })
    }
}

//Agregar comentario
const agregar = async (req, res) => {
    const { nombre_libro, texto_reseña, Calificación, Fecha_de_Publicación, usuario } = req.body;

    const data = new reviews({
        nombre_libro: nombre_libro,
        texto_reseña: texto_reseña,
        Calificación: Calificación,
        Fecha_de_Publicación: Fecha_de_Publicación,
        usuario: usuario
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