import React, { useState } from 'react'
import { Prestaciones } from './pages/prestaciones/Prestaciones'
import { Button, Col, Container, Row } from 'react-bootstrap'
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
    <Container fluid className='text-center general'>
      {seleccionarPagina()}
      <Row className='text-center align-items-center justify-content-center mu-3'>
        <Col xs={3}>
          <Button variant="danger" onClick={paginaAtras}>Atras</Button>
        </Col>
        <Col xs={3}>
          <Button variant="success" onClick={paginaSiguiente}>Siguiente</Button>
        </Col>
      </Row>
    </Container>
    {/* <FooterCustom></FooterCustom> */}
    </div>
  )
}

export default App