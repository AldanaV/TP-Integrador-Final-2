import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EditarLibro.css'
import Footer from "../footer/Footer";


const EditarLibro = () => {
const { id } = useParams();
const [titulo, setTitulo] = useState(null);
const [autor, setAutor] = useState("");
const [editorial, setEditorial] = useState("");
const [cantidad, setCantidad] = useState("");
const navigate = useNavigate();

useEffect(() => {
    const fetchLibro = async () => {
    try {
    const response = await fetch(
    `http://localhost:5000/api/libros/${id}`
    );
        const data = await response.json();
        setTitulo(data.titulo);
        setAutor(data.autor);
        setEditorial(data.editorial);
        setCantidad(data.cantidad);
    } catch (error) {
        console.error("Error al obtener libro:", error);
    }
    };

    fetchLibro();
}, [id]);

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:5000/api/libros/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, autor, editorial, cantidad }),
    });
        if (response.ok) {
        navigate("/privada");
    } else {
        console.error("Error al actualizar libro");
    }
    } catch (error) {
        console.error("Error al actualizar libro:", error);
    }
};

    if (!titulo) return <p>Cargando...</p>;

    return (
    <div className="formulario-libro">
        <div className="editarlibro-titulo">
            <h2>Editar Libro</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="titulo">Titulo:</label>
            <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            />
        </div>
        
        <div className="form-group">
            <label htmlFor="autor">Autor:</label>
            <input
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
            />
        </div>
            
            <div className="form-group">
            <label htmlFor="editorial">Editorial:</label>
            <input
            type="text"
            id="editorial"
            value={editorial}
            onChange={(e) => setEditorial(e.target.value)}
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="cantidad">Cantidad:</label>
            <input
            type="number"
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
            />
            </div>
            
            <div className="actualizar-libro">
            <input type="submit" value="Actualizar Libro" />
            </div>
    </form>

    <Footer/>
    </div>
);
};

export default EditarLibro;
