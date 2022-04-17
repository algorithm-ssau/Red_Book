import React, { Component } from 'react'
import img1 from '../Animals/1.png'
import img2 from '../Animals/2.png'
import img3 from '../Animals/3.png'
import img4 from '../Animals/4.png'
import './reptailsView.css';


export default class Reptails extends Component {
  render() {
    return (
      <div className="contacts">

      <div className="contact-card">
          <img align="center" src={img1}/>
          <h3><font color="#3AC1EF"> Лягушка травяная </font></h3>
          <p>Травяная лягушка обитает на заболоченных лугах 
            и во влажных лесах около выходов грунтовых вод, 
            в  ручьях и  мелких реках.</p>
      </div>
      
      
  </div>
    )
  }
}
