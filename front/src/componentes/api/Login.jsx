import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from './api';
import { useAuth } from './AuthContext';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await api.post('/users/login', {username, password});
            login();
            navigate('/privada');
        } catch(error){
            alert('Error al iniciar sesión: ' + error.response.data);
        }
    }



return(
<div className='conteiner-form1'>
    <div className='conteiner-form2'>
        <h2> Log in </h2>
        <form onSubmit={handleSubmit}>
            <div className='input-form1'>
                <div className='input-usuario1'>
                <label for="user">Usuario: </label>
                <input type="text"
                id="user"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required/>
                </div>
            
        
                <div className='input-password2'>
                <label for="password">Contraseña: </label>
                <input 
                type="password"
                id="pass"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
                </div>  
            
                <div className="btn-login">
                <button type="submit"> Iniciar sesión </button> 
                </div>

            </div>
        </form>
    </div>
</div>
);

}
export default Login;