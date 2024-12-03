import React from 'react';
import '../navbar/Nabvar.css'
import './Register.css';
import Footer from '../footer/Footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Register from './Register';

const RegisterPage = () => {
    return(
        <div className='registro'>
            <h1>Registro</h1>
            <div className='breadcrumb'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Contacto</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        <p style={{textAlign: 'center', fontSize: '30px'}}>¿Querés crearte un usuario? ¡Entraste en la página adecuada!</p>
            <Register/>
            <Footer/>
        </div>
    )
}

export default RegisterPage;