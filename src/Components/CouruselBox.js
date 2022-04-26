import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Forest from '../MainPagePictures/Forest.jpg'
import Volga from '../MainPagePictures/Volga.jpg'
import Luka from '../MainPagePictures/Luka.jpg'
import Zhiguli from '../MainPagePictures/Zhiguli.jpg'

export default class CouruselBox extends Component {
  render() {
    return (
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
          </Carousel.Item>np
      </Carousel>
    )
  }
}
