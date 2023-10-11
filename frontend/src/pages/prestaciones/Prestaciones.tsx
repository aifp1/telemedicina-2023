import React from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'

export const Prestaciones = () => {
    const categorias = [
        {
            nombreCategoria: 'Receta de lentes',
            codigoCategoria: 1,
        },
        {
            nombreCategoria: 'Audifonos Clinicos',
            codigoCategoria: 2,
        }
    ];

    function cargarCategorias() {
        const items = [];
        for (let index = 0; index < categorias.length; index++) {
            items.push(<Dropdown.Item key={categorias[index].codigoCategoria}>{categorias[index].nombreCategoria}</Dropdown.Item>)
        }
        return items;
    }

  return (
    <Container fluid className='text-center'>
        <Row className='text-center align-items-center justify-content-center'>
            <Col xs={12} className='mb-4'>
                <Row>
                    <Col xs={12}>
                        <p style={{ color: '#ffffff' }}>Seleccionar categor&iacute;a</p>
                    </Col>
                    <Col xs={12}>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                --SELECCIONAR--
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {cargarCategorias()}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} className='mb-4'>
                <Row>
                    <Col xs={12}>
                        <p style={{ color: '#ffffff' }}>Seleccionar prestaciones</p>
                    </Col>
                    <Col xs={12}>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                --SELECCIONAR--
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {cargarCategorias()}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>                
            </Col>
        </Row>
    </Container>
  )
}
