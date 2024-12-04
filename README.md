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
<p>
    1. Navega al directorio /back
    cd back

    2.Instala las dependencias del backend.
    npm install

    3.Configura las variables de entorno; crea un archivo .env en el directorio back/ y agregá la siguiente línea:
    MONGODB_URI= mongodb://localhost:27017/mi-base-de-datos

    Asegurate de reemplazar "mi-base-de-datos" con el nombre de tu base de datos en MongoDB.

    4. Iniciar el servidor del backend.
    npm start
</p>

<h3>Frontend</h3>
<p>
    1.Navega al directorio /front
    cd front

    2.Instala las dependencias del frontend.
    npm install

    3.Inicia el servidor del frontend.
    npm run dev
</p>

<h2>Funcionalidades</h2>
<h3>Funciones de los libros</h3>
<ul>
    <li>Lista de libros: muestra todos los libros disponibles en la base de datos.</li>
    <li>Detalle del libro: consulta los detalles de un libro en especifico.</li>
    <li>Crear libro: pide 4 valores y añade un libro a la base de datos.</li>
    <li>Editar libro: modifica los detalles del libro seleccionado.</li>
    <li>Eliminar libro: elimina un libro seleccionado de la base de datos.</li>
</ul>

<h3>Funciones de los usuarios</h3>
<ul>
    <li>Registro: permite el registro de un nuevo usuario y se guarda en la base de datos.</li>
    <li>Log in: si tenes creado un usuario y contraseña, podes ingresar al contenido exclusivo</li>
    <li>Log out: cierra la sesión y ya no podes acceder al contenido exclusivo.</li>
</ul>

<h2>Endpoints del API</h2>
<ul>
    <li>GET /api/libros - Obtiene todos los libros.</li>
    <li>GET /api/libros/:id - Obtiene un libro por ID.</li>
    <li>POST /api/libros - Crea un libro.</li>
    <li>PUT api/libros/:id - Actualiza un libro por ID.</li>
    <li>DELETE /api/libros/:id - Elimina un libro por ID.</li>
</ul>

<h2>¡Muchas gracias por visitarnos!</h2>
<p>Nunca dudes en despejar tu mente con un buen libro</p>