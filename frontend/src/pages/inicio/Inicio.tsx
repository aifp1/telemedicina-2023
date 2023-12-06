import { useState } from 'react'
import { Prestaciones } from '../prestaciones/Prestaciones';
import { Profesional } from '../profesional/Profesional';
import { Horario } from '../horario/Horario';
import { Paciente } from '../paciente/Paciente';
import { Pago } from '../pago/Pago';
import { NavbarCustom } from '../../components/navbarCustom/NavbarCustom';
import { FooterCustom } from '../../components/footerCustom/FooterCustom';
import { Link } from 'react-router-dom';
import './Inicio.css';
import { cleanDigitSectionValue } from '@mui/x-date-pickers/internals/hooks/useField/useField.utils';

export const Inicio = () => {
    const [pagina, setPagina] = useState(0);
    const [dataFromPage, setDataFromPage] = useState({state:false});

  function passData(data){
    //console.log("Data: ", data);
    setDataFromPage(data);
  }


  function seleccionarPagina() {
    //console.log("Pagina: ", pagina);
    switch(pagina){
      case 0: 
        return <Prestaciones onDataFromPage={passData} ></Prestaciones>
      case 1:
        return <Profesional data={dataFromPage} onDataFromPage={passData}></Profesional>
      case 2:
        return <Horario data={dataFromPage} onDataFromPage={passData}></Horario>
      case 3:
        return <Paciente></Paciente>
      case 4:
        return <Pago></Pago>
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
              <button type='button' className='btn btn-success mx-4' onClick={paginaSiguiente} disabled={dataFromPage.state? false : true}>Siguiente</button>
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
