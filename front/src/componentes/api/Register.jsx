import React, {useState} from 'react';
import api from "./api";
import './Register.css'; 

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await api.post('/users/register', {username, password});
            alert('Usuario registrado con éxito.');
        } catch(error){
            alert('Error al registrar el usuario: ' + error.response.data);
        }
    }

//Formulario

return(
    
<div className='contenedor-form1'>
    <div className='contenido-form2'>
        <h2> Registrate</h2>
        <form onSubmit={handleSubmit}>
            <div className='input-form'>
                <div className='input-usuario'>
                <label for="usuario"> Usuario: </label>
                <input type="text"
                id="usuario"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required/>
            </div>

            <div className="input-password">
            <label for="password">Contraseña: </label>
            <input 
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
            </div>
            
            <div className="btn-register">
            <button type="submit"> Registrar </button>
            </div>

        </div>
        </form>
    </div>
</div>
);

}
export default Register;