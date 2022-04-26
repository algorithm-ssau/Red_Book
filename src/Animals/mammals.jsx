import React, { Component } from 'react'
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


                <Container>
                  <h2 className='text-center m-4'>Разделы</h2>
                  <CardGroup>
                  <Card border="info" style={{ width: '18rem'}}>
                          <Card.Img 
                          variant="top"
                          src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                          />
                           <Card.Body>
                          <Card.Title>Млекопитающие</Card.Title>
                          <Card.Text>
                            Класс позвоночных животных, основной отличительной 
                            особенностью которых является вскармливание
                            детёнышей молоком.
                          </Card.Text>
                      </Card.Body>
                      </Card>
                     
                      <Card border="info" style={{ width: '18rem'}}>
                          <Card.Img 
                          variant="top"
                          src="https://images.pexels.com/photos/1342391/pexels-photo-1342391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          />
                           <Card.Body>
                          <Card.Title>Рыбы</Card.Title>
                          <Card.Text>
                          Обширная группа челюстноротых, для которых характерно
                          жаберное дыхание на всех этапах постэмбрионального
                          развития организма.
                          </Card.Text>
                      </Card.Body>
                      </Card>

                      <Card border="info" style={{ width: '18rem'}}>
                          <Card.Img 
                          variant="top"
                          src="https://images.pexels.com/photos/36714/snake-rattlesnake-reptile-skin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          />
                           <Card.Body>
                          <Card.Title>Рептилии</Card.Title>
                          <Card.Text>
                          Это четвероногие позвоночные, существа, которые либо
                          имеют четыре конечности, либо, подобно змеям,
                          произошли от четвероногих предков.
                          </Card.Text>
                      </Card.Body>
                      </Card>

                      <Card border="info" style={{ width: '18rem'}}>
                          <Card.Img 
                          variant="top"
                          src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                          />
                           <Card.Body>
                          <Card.Title>Насекомые</Card.Title>
                          <Card.Text>
                          Класс беспозвоночных членистоногих животных. 
                          Согласно традиционной классификации, вместе с
                          многоножками относятся к подтипу трахейнодышащих.
                          </Card.Text>
                      </Card.Body>
                      </Card>

                      <Card border="info" style={{ width: '18rem'}}>
                          <Card.Img 
                          variant="top"
                          src="https://images.pexels.com/photos/589802/pexels-photo-589802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          />
                           <Card.Body>
                          <Card.Title>Заповедники</Card.Title>
                          <Card.Text>
                          Участок территории, на котором сохраняется в
                          естественном состоянии весь его природный комплекс. 
                          Как правило, заповедники закрыты для посещения
                          </Card.Text>
                      </Card.Body>
                      </Card>

                      </CardGroup>
                 </Container>

                 </>
        )
    }
}
