import { useState } from 'react'
import { Prestaciones } from '../prestaciones/Prestaciones';
import { Profesional } from '../profesional/Profesional';
import { Horario } from '../horario/Horario';
import { NavbarCustom } from '../../components/navbarCustom/NavbarCustom';
import { FooterCustom } from '../../components/footerCustom/FooterCustom';
import { Link } from 'react-router-dom';
import './Inicio.css';

export const Inicio = () => {
    const [pagina, setPagina] = useState(0);
  function seleccionarPagina() {
    console.log("Pagina: ", pagina);
    switch(pagina){
      case 0: 
        return <Prestaciones></Prestaciones>
      case 1:
        return <Profesional></Profesional>
      case 2:
        return <Horario></Horario>
      case 3:
        return <div>Paciente</div>
      case 4:
        return <div>Pago</div>
      case 5:
        return <div>Detalle</div>
    }
  }
  function paginaSiguiente(){
    if((pagina >= 0) && (pagina < 5)){
      setPagina(pagina + 1);
    }
  }
  function paginaAtras(){
    if((pagina > 0) && (pagina <= 5)){
      setPagina(pagina - 1);
    }
  }
  return (
    <div>
        <NavbarCustom></NavbarCustom>
        <div className="general container-fluid text-center p-4">
          <div className="row text-center align-items-center justify-content-center my-3">
            <div className="col-12">
              {seleccionarPagina()}
            </div>
            <div className="col-12">
              <button type='button' className='btn btn-danger mx-4' onClick={paginaAtras}>Atras</button>
              <button type='button' className='btn btn-success mx-4' onClick={paginaSiguiente}>Siguiente</button>
            </div>
            <div className="col-12 mt-5">
              <Link to='/login' className='link'>Iniciar sesion administrador</Link>              
            </div>
          </div>
        </div>
        <FooterCustom></FooterCustom>
      </div>
  )
}
