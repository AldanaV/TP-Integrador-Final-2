const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const bcrypt = requiere('bcrypt');

//Rutas para registrar un nuevo usuario
router.post('/register', async(req, res) => {
    const { username, password} = req.body;
    try{
        const existingUser = await User.findOne({ username }); //Para que verifique si existe el usuario
        if(existingUser){
            return res.status(400).send('El usuario ya existe.');
        }
            //para que este encriptada
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword});

        await newUser.save(); //para que lo guarde
        console.log('Usuario registrado: ', newUser);
        rest.status(201).send('Usuario registrado con exito.');
    } catch(err){
        console.error('Error al registrar el usuario: ', err);
    }
})

//Ruta para iniciar sesion
router.post('/login', async(req,res) => {
    
})


//Ruta para cerrar sesion


//Ruta de contenido protegido

module.exports = router;