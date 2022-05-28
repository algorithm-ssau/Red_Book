//import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Container, Button, Form,Card, CardGroup } from 'react-bootstrap'

import logo from './logo1.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../Components/CouruselBox'
import Carousel from 'react-bootstrap/Carousel'
import Fish from '../Pages/Fish';
import Insects from '../Pages/Insects';
import Reptails from '../Pages/Reptails';
import Mammal from '../Pages/Mammall';
import Parks from '../Pages/Parks';


export default class Mammals extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block-inline align-top"
                                alt="Logo"
                            /> Red Book of Samara
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id="responsive-navbar-nav" />
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/mammals">Млекопитающие</Nav.Link>
                            <Nav.Link href="/reptails">Рептилии</Nav.Link>
                            <Nav.Link href="/insects">Насекомые</Nav.Link>
                            <Nav.Link href="/fish">Рыбы</Nav.Link>
                            <Nav.Link href="/parks">Заповедники</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path='/mammals' element={<Mammal/>}/>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/reptails' element={<Reptails/>}/>
                        <Route path='/insects' element={<Insects/>}/>
                        <Route path='/fish' element={<Fish/>}/>
                        <Route path='/parks' element={<Parks/>}/>
                    </Routes>
                </Router>

               
                 </>
        )
    }
}
