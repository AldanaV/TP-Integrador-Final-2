const mongoose = require('mongoose');
const Libro = require('../models/LibrosModel');

//Obtener todos los libros
exports.getLibro = async(req, res) =>{
    try{
        const libros = await Libro.find();
        res.json(libros);
    } catch(err){
        res.status(500).json({ message: err.message});
    }
}

//Crear un libro
exports.createLibro = async(req, res) =>{
    const libro = new Libro({
        titulo: req.body.titulo,
        autor: req.body.autor,
        editorial: req.body.editorial,
        cantidad: req.body.cantidad,
    });

    try{
        const nuevoLibro = await Libro.save();
        res.status(201).json(nuevoLibro);
    } catch(err){
        res.status(400).json({ message: err.message});
    }
};

// Obtener un libro por ID
exports.getLibroById = async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        if (libro) {
        res.json(libro);
        } else {
        res.status(404).json({ message: 'Libro no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un libro por ID
exports.updateLibro = async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        if (libro) {
        libro.titulo = req.body.titulo || libro.titulo;
        libro.autor = req.body.autor || libro.autor;
        libro.editorial = req.body.editorial || libro.editorial;
        libro.cantidad = req.body.cantidad || libro.cantidad;
        
        const libroActualizado = await libro.save();
        res.json(libroActualizado);
        } else {
        res.status(404).json({ message: 'Libro no encontrado' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// Eliminar un libro por ID
exports.deleteLibro = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'ID no válido' });
    }

    try {
        const libro = await Libro.findById(req.params.id);
        if (libro) {
        await libro.deleteOne();
        res.json({ message: 'Libro eliminado' });
    } else {
        res.status(404).json({ message: 'Libro no encontrado' });
    }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
