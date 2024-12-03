import React from 'react';
import '../navbar/Nabvar.css'
import './Login.css';
import Footer from '../footer/Footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Register from './Login';

const LoginPage = () => {
    return(
        <div className='login'>
            <h1>Iniciar sesión</h1>
            <div className='breadcrumb'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Iniciar sesión</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        <p style={{textAlign: 'center', fontSize: '30px'}}>¡Bienvenido, te estabamos esperando!</p>
            <Register/>
            <Footer/>
        </div>
    )
}

export default LoginPage;