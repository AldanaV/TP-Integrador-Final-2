const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session'); 
const librosRoutes = require('./routes/libroRoutes');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config(); 
const app = express();


app.use(cors()); 
app.use(express.json()); 


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true, 
    cookie: { secure: false }
}));



app.use('/api/libros', librosRoutes);
app.use('/api/users', userRoutes);



mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});



