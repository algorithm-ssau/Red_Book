import React, { Component } from 'react'
import Frog from '../Animals/Frog.jpg'

import './reptailsView.css';


export default class Reptails extends Component {
  render() {
    return (
      <div className="contacts">

      <div className="contact-card">
          <img align="center" src={Frog}/>
          <h3><font color="#3AC1EF"> Лягушка травяная </font></h3>
          <p>Травяная лягушка обитает на заболоченных лугах 
            и во влажных лесах около выходов грунтовых вод, 
            в  ручьях и  мелких реках.</p>
      </div>
      
      
  </div>
    )
  }
}
