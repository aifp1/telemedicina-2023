import React from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'

export const Profesional = () => {
    const profesionales = [
        {
            nombreProfesional: 'Benjamin',
            codigoProfesional: 1,
        },
        {
            nombreProfesional: 'Camila',
            codigoProfesional: 2,
        },
    ]
    function cargarProfesionales(){
        const items = [];
        for (let index = 0; index < profesionales.length; index++) {
            items.push(<Dropdown.Item key={profesionales[index].codigoProfesional}>{profesionales[index].nombreProfesional}</Dropdown.Item>)
        }
        return items;
    }
  return (
    <Container fluid className='text-center'>
        <Row className='text-center align-items-center justify-content-center'>
            <Col xs={12}>
                <p style={{ color: '#ffffff' }}>Seleccionar profesional</p>
            </Col>
            <Col xs={12} className='mb-4'>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        --SELECCIONAR--
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {cargarProfesionales()}
                    </Dropdown.Menu>
                </Dropdown>                
            </Col>
        </Row>
    </Container>
  )
}
