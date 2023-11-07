//const librosFake = require('../data/libros');
const libros = require('../models/Books');

//obtener todos
const getTodos = async (req, res) => {
    try {
        const librosdevueltos = await libros.find();
        res.json(librosdevueltos);

    } catch (e) {
        res.json(e)
    }
}


//obtener por ID de libro
const getByIDBook = async (req, res) => {
    try {
        let { id } = req.params;
        //console.log(id);
        const libroEncontrado = await libros.findById({ _id: id });
        if (libroEncontrado) {
            res.status(200).json(libroEncontrado);
        } else {
            res.status(404).json({
                id,
                encontrado: false,
                msg: "No se encontro libro con ese id"
            })
        }

    } catch (e) {
        res.json(e);
    }

};

//Agregar
const agregar = async (req, res) => {
    try {
        const { nombre, id_autor, editorial, descripcion, numero_pag, img, link_descarga } = req.body;

        const data = new libros({
            nombre: nombre,
            id_autor: id_autor,
            editorial: editorial,
            descripcion: descripcion,
            numero_pag: numero_pag,
            img: img,
            link_descarga: link_descarga
        })
        await data.save().then((ok) => {
            if (ok) {
                res.status(201).json({
                    msg: 'se agrego el libro',
                    data
                });
            } else {
                res.status(404).json({ mensaje: 'Error en el guardado, intente nuevamente' });
            }
        });

    } catch (e) {
        res.json(e);
    }

}

//Editar
const editar = async (req, res) => {

    try {
        let { id } = req.params;
        const libroEditado = await libros.findByIdAndUpdate(id, req.body, { new: true });
        if (!libroEditado) {
            res.status(404).json({ mensaje: 'libro no encontrado' });
        } else {
            res.status(201).json({
                msg: 'se edito el libro',
                libroEditado
            });

        }

    } catch (error) {
        console.error('Error al editar el libro:', error);
        return res.status(500).json({ mensaje: 'Error al editar el libro' });

    }


}

//Borrar
const borrar = async (req, res) => {
    try {
        let { id } = req.params;
        await libros.findByIdAndDelete({ _id: id }).then(ok => {
            if (ok) {
                res.status(200).json({
                    msg: 'se borro el libro',
                });
            } else {
                res.status(500).json("Error en el borrado")
            }
        });

    } catch (e) {
        res.json(e);
    }



}

//Exportar funciones
module.exports = {
    getTodos,
    agregar,
    editar,
    borrar,
    getByIDBook
}