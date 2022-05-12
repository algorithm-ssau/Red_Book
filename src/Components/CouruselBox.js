import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Container, Button, Form,Card, CardGroup } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Forest from '../MainPagePictures/Forest.jpg'
import Volga from '../MainPagePictures/Volga.jpg'
import Luka from '../MainPagePictures/Luka.jpg'
import Zhiguli from '../MainPagePictures/Zhiguli.jpg'

export default class CouruselBox extends Component {
  render() {
    return (
        <>
      <Carousel>

           <Carousel.Item>
              <img
              className='d-block w-100'
              src={ Zhiguli }
              alt="Zhiguli"
              />
              <Carousel.Caption>
              <h3>Красная Книга Самарской области</h3>
                  <p> Этот сайт предназначен для просмотра животных, которые живут на территории Самарской области, а также находятся в красной книге Самарской области.
        Здесь можно также просмотреть заповедные зоны Самарской области.</p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img
              className='d-block w-100'
              src={ Forest }
              alt="Forest"
              />
              <Carousel.Caption>
                  <h3>Красная Книга Самарской области</h3>
                  <p>Сборник живых организмов внесённых в Красную книгу Российской Федерации</p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img
              className='d-block w-100'
              src={ Luka }
              alt="Luka"
              />
              <Carousel.Caption>
              <h3></h3>
                  <p></p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img
              className='d-block w-100'
              src={ Volga }
              alt="Volga"
              />
              <Carousel.Caption>
                  <h3>Красная Книга Самарской области</h3>
                  <p></p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>

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
