import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import NabVarPrincipal from './componentes/navbar/Nabvar'
import Home from './componentes/home/Home'
import LibrosEspañol from './componentes/libros/LibrosEspañol'
import LibrosIngles from './componentes/ingles/Ingles'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './componentes/contacto/Contacto'
import Detalle from './componentes/detalle/Detalle'
import { AuthProvider } from './componentes/api/AuthContext';
import ProtectedRoute from './componentes/api/ProtectedRoute'
import RegisterPage from './componentes/api/RegisterPage'
import LoginPage from './componentes/api/LoginPage'
import ListaLibros from './componentes/privada/ListaLibros'
import CrearLibro from './componentes/privada/CrearLibro'
import DetalleLibro from './componentes/privada/DetalleLibro'
import EditarLibro from './componentes/privada/EditarLibro'





function App() {
  return (
    <AuthProvider>
    <div>
      <Router>
        <NabVarPrincipal />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/librosespañol' Component={LibrosEspañol} />
          <Route path='/ingles' Component={LibrosIngles} />
          <Route path='/contacto' Component={Contacto} />
          <Route path='/detalle' Component={Detalle} />
          <Route path='/registerpage' Component={RegisterPage}/>
          <Route path='/loginpage' Component={LoginPage}/>
          <Route path="/privada" element={<ProtectedRoute element={<ListaLibros />} />} />
          <Route path='/privada' Component={ListaLibros} />
          <Route path='/crear' Component={CrearLibro} />
          <Route path='/libros/:id' Component={DetalleLibro} />
          <Route path='/editar-libros/:id' Component={EditarLibro} />

        </Routes> 
      </Router>
        
    </div>
    </AuthProvider>
  );
}

export default App
