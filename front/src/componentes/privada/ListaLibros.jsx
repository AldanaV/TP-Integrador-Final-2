import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListaLibros.css';
import Footer from '../footer/Footer';

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
    <div className='container-lista'>
        <div className='lista-title'>
            <h1>Lista de libros</h1>
        </div>
        
            <div className='lista-libros'>
                <ul>
                {libros.map((libro) => (
                <li key={libro._id}>
                {libro.titulo} - <Link to={`/libros/${libro._id}`}>Ver Detalle</Link>
                </li>
                ))}
                </ul>
            </div>

                <div className='link-crearlibro'>
                    <Link to="/crear" className="crear-libros">Crear nuevo libro</Link>
                </div>

        <Footer/>
    </div>


);
};

export default ListaLibros;