import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/inicio/Inicio';
import { Login } from './pages/login/Login';
import { Administrador } from './pages/administrador/Administrador';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import { Medico } from './pages/medico/Medico';
import { Categoriasadmin } from './pages/categorias-admin/Categoriasadmin';
import { Prestacionesadmin } from './pages/prestaciones-admin/Prestacionesadmin';
import { Medicosadmin } from './pages/medico-admin/Medicoadmin';
import { Horarioadmin } from './pages/horario-admin/Horarioadmin';


const App = () => {
  
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/auth/dashboard/admin' element={<Administrador />}></Route>
            <Route path='/auth/dashboard/admin/Categorias' element={<Categoriasadmin />}></Route>
            <Route path='/auth/dashboard/admin/Prestaciones' element={<Prestacionesadmin />}></Route>
            <Route path='/auth/dashboard/admin/Profesional' element={<Medicosadmin />}></Route>
            <Route path='/auth/dashboard/admin/Horario' element={<Horarioadmin />}></Route>
            <Route path='/auth/dashboard/medico' element={<Medico />}></Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
    
  )
}

export default App