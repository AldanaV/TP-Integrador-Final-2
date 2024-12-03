import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import NabVarPrincipal from './componentes/navbar/Nabvar'
import Home from './componentes/home/Home'
import Libros from './componentes/libros/Libros'
import LibrosIngles from './componentes/ingles/Ingles'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './componentes/contacto/Contacto'
import Detalle from './componentes/detalle/Detalle'

import Login from './componentes/api/Login'
import { AuthProvider } from './componentes/api/AuthContext';
import Privada from './componentes/privada/Privada'
import ProtectedRoute from './componentes/api/ProtectedRoute'
import RegisterPage from './componentes/api/RegisterPage'




function App() {
  return (
    <AuthProvider>
    <div>
      <Router>
        <NabVarPrincipal />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/libros' Component={Libros} />
          <Route path='/ingles' Component={LibrosIngles} />
          <Route path='/contacto' Component={Contacto} />
          <Route path='/detalle' Component={Detalle} />
          <Route path='/registerpage' Component={RegisterPage}/>
          <Route path='/login' Component={Login}/>
          <Route path="/privada" element={<ProtectedRoute element={<Privada />} />} />
          <Route path='' />

        </Routes> 
      </Router>
        
    </div>
    </AuthProvider>
  );
}

export default App
