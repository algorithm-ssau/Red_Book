import React, { Component } from 'react'
import Fish1 from '../Animals/Fish1.jpg'

export default class Fish extends Component {
  render() {
    return (
      <div className="contacts">

      <div className="contact-card">
          <img align="center" src={Fish1}/>
          <h3><font color="#3AC1EF"> Форель ручьёвая </font></h3>
          <p>Форель — жилая рыба в ручьях со сравнительно чистой водой 
            и каменистым дном. Питается всякого рода мелкими животными, 
            крупные особи охотно поедают падающих в воду насекомых.</p>
      </div>
      
      
  </div>
    )
  }
}
