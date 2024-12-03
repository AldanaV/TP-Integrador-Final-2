import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from './api';
import { useAuth } from './AuthContext';

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

//Formulario

return(
    <form onSubmit={handleSubmit}>
        <h2> Iniciar sesión </h2>
        <input type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required/>

        <input 
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>

        <button type="submit"> Iniciar sesión </button>
    </form>
);

}
export default Login;