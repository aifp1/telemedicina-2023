import { useState } from 'react'
import { Prestaciones } from './pages/prestaciones/Prestaciones'
import { Profesional } from './pages/profesional/Profesional';
import { NavbarCustom } from './components/navbarCustom/NavbarCustom';
import { FooterCustom } from './components/footerCustom/FooterCustom';

const App = () => {
  const [pagina, setPagina] = useState(0);
  function seleccionarPagina() {
    console.log("Pagina: ", pagina);
    switch(pagina){
      case 0: 
        return <Prestaciones></Prestaciones>
      case 1:
        return <Profesional></Profesional>
    }
  }
  function paginaSiguiente(){
    setPagina(pagina + 1);
  }
  function paginaAtras(){
    setPagina(pagina - 1);
  }
  return (
    <div>
      <NavbarCustom></NavbarCustom>
      <div className="container-fluid text-center general p-4">
        <div className="row text-center align-items-center justify-content-center my-3">
          <div className="col-12">
            {seleccionarPagina()}
          </div>
          <div className="col-12">
            <button type='button' className='btn btn-danger mx-4' onClick={paginaAtras}>Atras</button>
            <button type='button' className='btn btn-success mx-4' onClick={paginaSiguiente}>Siguiente</button>
          </div>
        </div>
      </div>
      <FooterCustom></FooterCustom>
    </div>
  )
}

export default App