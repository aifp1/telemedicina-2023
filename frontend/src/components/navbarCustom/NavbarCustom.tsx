import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export const NavbarCustom = () => {
  return (
    <Navbar expand="xs" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand><img src='https://www.redsaludpopular.cl/wp-content/uploads/2021/10/MARCA-HORIZONTALRSP-300x112.png'></img></Navbar.Brand>
        </Container>
    </Navbar>
  )
}
