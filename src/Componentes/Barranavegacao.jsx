import React, { Component } from 'react';
import {Nav,Navbar} from 'react-bootstrap'

class Barranavegacao extends Component {
    render() {
        return (
            <header>
            <Navbar bg="dark" variant="dark">
              
                  <Navbar.Brand href="#">SpringAPP</Navbar.Brand>
                    <Nav className="me-auto">
                         <Nav.Link href="/">Home</Nav.Link>
                         <Nav.Link href="/usuarios">Usuarios</Nav.Link>
                    </Nav>
              </Navbar>
            </header>
        );
    }
}

export default Barranavegacao;