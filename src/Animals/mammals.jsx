import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Container, Button, Form } from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Fish from '../Pages/Fish';
import Insects from '../Pages/Insects';
import Reptails from '../Pages/Reptails';
import Mammal from '../Pages/Mammall';
import Parks from '../Pages/Parks';
import Home from '../Pages/Home';

export default class Mammals extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
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
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/mammals">Mammals</Nav.Link>
                            <Nav.Link href="/reptails">Reptails</Nav.Link>
                            <Nav.Link href="/insects">Insects</Nav.Link>
                            <Nav.Link href="/fish">Fish</Nav.Link>
                            <Nav.Link href="/parks">parks</Nav.Link>
                        </Nav>
                        <Form inline >
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/mammals" component={Mammal} />
                        <Route exact path="/reptails" component={Reptails} />
                        <Route exact path="/insects" component={Insects} />
                        <Route exact path="/fish" component={Fish} />
                        <Route exact path="/parks" component={Parks} />
                    </Routes>
                </Router>
            </>
        )
    }
}
