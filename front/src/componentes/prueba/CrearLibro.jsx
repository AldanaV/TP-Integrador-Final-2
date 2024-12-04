import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CrearLibro = () => {
const [titulo, setTitulo] = useState('');
const [autor, setAutor] = useState('');
const [editorial, setEditorial] = useState('');
const [cantidad, setCantidad] = useState('');
const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const nuevoLibro = { titulo, autor, editorial, cantidad };
        await axios.post('http://localhost:5000/api/libros', nuevoLibro);
        navigate('/prueba');
    } catch (error) {
        console.error('Error al crear el libro:', error);
    }
};

return (
    <div className="crear-libro">
        <h2>Crear Libro</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="autor">Autor</label>
            <input
            type="text"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="editorial">Editorial</label>
            <input
            type="text"
            id="editorial"
            value={editorial}
            onChange={(e) => setEditorial(e.target.value)}
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="cantidad">Cantidad</label>
            <input
            type="text"
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
            />
        </div>
        <button type="submit">Crear</button>

        </form>
    </div>
);
};

export default CrearLibro;