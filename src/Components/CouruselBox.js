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
              src={ Forest }
              alt="Forest"
              />
              <Carousel.Caption>
                  <h3>Forest image</h3>
                  <p>hfrdhfjfh</p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img
              className='d-block w-100'
              src={ Zhiguli }
              alt="Zhiguli"
              />
              <Carousel.Caption>
                  <h3>Forest image</h3>
                  <p>hfrdhfjfh</p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img
              className='d-block w-100'
              src={ Luka }
              alt="Luka"
              />
              <Carousel.Caption>
                  <h3>Forest image</h3>
                  <p>hfrdhfjfh</p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img
              className='d-block w-100'
              src={ Volga }
              alt="Volga"
              />
              <Carousel.Caption>
                  <h3>Forest image</h3>
                  <p>hfrdhfjfh</p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    )
  }
}
