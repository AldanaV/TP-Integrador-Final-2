import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaLibros = () => {
const [libros, setLibros] = useState([]);

useEffect(() => {
    const fetchLibros = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/libros');
        setLibros(response.data);
    } catch (error) {
        console.error('Error al obtener los libros:', error);
    }
    };

    fetchLibros();
}, []);

return (
    <div>
    <h1>Lista de libros</h1>
    <Link to="/crear" className="crear-libros">Crear nuevo libro</Link>
    <ul>
        {libros.map((libro) => (
            <li key={libro._id}>
            {libro.titulo} - <Link to={`/libros/${libro._id}`}>Ver Detalle</Link>
            </li>
        ))}
    </ul>
    </div>
);
};

export default ListaLibros;