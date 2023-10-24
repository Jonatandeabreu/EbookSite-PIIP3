//const librosFake = require('../data/libros');
const libros = require('../models/Books');
//obtener todos
const getTodos = async (req, res) => {
    const librosdevueltos = await libros.find().exec();
    res.json(librosdevueltos);
}

//obtener por ID de autor
const getByID = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  const libroEncontrado = await libros.find({id_autor:id}).exec();

  res.json(libroEncontrado);
};

//obtener por ID de libro
const getByIDBook = async (req, res) => {
    let { id } = req.params;
    console.log(id);
    const libroEncontrado = await libros.findById().exec();
  
    res.json(libroEncontrado);
  };

//Agregar
const agregar =  async (req, res) => {
    const { nombre, id_autor, editorial, descripcion, numero_pag, img, link_descarga } = req.body;

    const data = new libros({
        nombre:nombre,
        id_autor:id_autor,
        editorial:editorial,
        descripcion:descripcion,
        numero_pag:numero_pag,
        img:img,
        link_descarga:link_descarga
    })
     await data.save().then((ok) => {
        if(ok){
            res.status(201).json({
                msg:'se agrego el libro',
                data
            }); 
        }else{
            console.log("no se guardo")
        }
    });
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
    res.json({
        msg:'se edito el libro',
        librosActualizado});
}

//Borrar
const borrar = async (req, res) => {
    let { id } = req.params;
    await libros.findByIdAndDelete({_id:id}).then(ok => {
     if(ok){
        res.json({
            msg:'se borro el libro',
        }); 
     }else{
        res.json("Error en el borrado")
     }
    });

    
}

//Exportar funciones
module.exports = {
    getTodos,
    getByID,
    agregar,
    editar,
    borrar,
    getByIDBook
}