import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Inicio } from './pages/inicio/Inicio';
import { Login } from './pages/login/Login';


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>
    
  )
}

export default App