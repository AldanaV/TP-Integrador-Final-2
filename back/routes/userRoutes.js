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
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).send('Usuario no encontrado.');
        }
        const match = await bcrypt.compare(password, user.password);
        if(!match){
            console.error('Contraseña incorrecta para el usuario: ',username);
            return res.status(404).send('Contraseña incorrecta.');
        }
        
        req.session.user = user.username;
        res.send(`Usuario ${user.username} ha iniciado sesión`);
    }catch(err){
        res.status(500).send('Error en el servidor.');
    }
});


//Ruta para cerrar sesion
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err){
            return res.status(500).send('Error al cerrar sesión.');
        }
        res.send('Sesión cerrada.');
    });
});

//Ruta de contenido protegido
router.get('/privada', (req, res) => {
    if(req.session.user){
        res.send(`Bienvenido, ${req.session.user}`);
    } else{
        res.status(401).send('Entrada no autorizada.');
    }
});

module.exports = router;