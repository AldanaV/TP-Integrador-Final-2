import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';



const DetalleLibro = () => {
const { id } = useParams();
const [libro, setLibro] = useState(null);
const navigate = useNavigate();

useEffect(() => {
    const fetchLibro = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/libros/${id}`);
        const data = await response.json();
        setLibro(data);
    } catch (error) {
        console.error('Error al obtener libro:', error);
    }
    };

    fetchLibro();
}, [id]);

const handleDelete = async () => {
    try {
    const response = await fetch(`http://localhost:5000/api/libros/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        navigate('/prueba');
    } else {
        console.error('Error al eliminar libro');
    }
    } catch (error) {
        console.error('Error al eliminar libro:', error);
    }
};
    if(!libro) return <p>Cargando...</p>;

return (
    <div className='container4'>
        <div className="detalle-libro">
            <h2>{libro.titulo}</h2>
            <div className="libro-info">
                <p><strong>Autor:</strong> {libro.autor}</p>
                <p><strong>Editorial:</strong> {libro.editorial}</p>
                <p><strong>Cantidad:</strong> {libro.cantidad}</p>
            </div>
        
            <div className="acciones">
                <Link to={`/editar-libros/${libro._id}`} className="editar">Editar</Link>
                <button onClick={handleDelete} className="eliminar">Eliminar</button>
            </div>
        </div>
    </div>
);
};



export default DetalleLibro;