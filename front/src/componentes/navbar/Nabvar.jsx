import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './Nabvar.css';
import { useAuth } from '../api/AuthContext';



const NabVarPrincipal = () => {
const {logout} = useAuth();

const handleLogout = () => {
logout();

}
    
    
    return (

        <div>
            <Navbar expand="lg" className="bg-body-tertiary ">
                <Container>
                    <Link to='/'>
                        <img src='./iconolibro.png' width='80'/>
                        </Link>
                    <Navbar.Brand as={Link} to="/">Libreria Nocturna</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/librosespañol">Libros</Nav.Link>
                            <Nav.Link as={Link} to="/ingles">Libros en ingles</Nav.Link>
                            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                            </Nav>

                            <Nav className="ms-auto"> 
                            <Nav.Link as={Link} to= "/registerpage">Registro</Nav.Link>
                            <Nav.Link as={Link} to= "/loginpage">Iniciar sesión</Nav.Link>
                            <Nav.Link as={Link} to= "/privada">Contenido exclusivo</Nav.Link>
                            <Nav.Link onClick={handleLogout}> Cerrar sesión</Nav.Link>

                            
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NabVarPrincipal;