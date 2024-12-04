<h1>Libreria Nocturna - gestión de libreria</h1>

<p>¡Bievenidos a Libreria nocturna!</p>
<p>Este proyecto es una aplicación web pensada para la gestión de libros; desarrollada utilizando React para el frontend y Node.js con Express para el backend. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre libros en español e inglés (siempre y cuando estes logeado en la página), utilizando MongoDB como base de datos.</p>


<h2>Tecnologías utilizadas</h2>

<ul>
    <li>Frontend: React, React Router, CSS</li>
    <li>Framework: Bootstrap</li>
    <li>Backend: Node.js, Express</li>
    <li>Base de Datos: MongoDB, Mongoose</li>
</ul>


<h2>Estructura del proyecto</h2>

<ul>
    <li><strong>Frontend:</strong> Código fuente en el directorio front/</li>
    <li><strong>Backend:</strong> Código fuente en el directorio back/</li>
</ul>

<h2>Instalación</h2>
<h3>Backend</h3>
<p>1. Navega al directorio /back
    cd back

    2.Instala las dependencias del backend.
    npm install

    3.Configura las variables de entorno; crea un archivo .env en el directorio back/ y agregá la siguiente línea:
    MONGODB_URI= mongodb://localhost:27017/mi-base-de-datos

    Asegurate de reemplazar "mi-base-de-datos" con el nombre de tu base de datos en MongoDB.

    4. Iniciar el servidor del backen.
    npm start
</p>
