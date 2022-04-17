import React, { Component } from 'react'
import Fish1 from '../Animals/Fish1.jpg'
import Fish2 from '../Animals/Osetr.jpg'
import Fish3 from '../Animals/BelugaBar.jpg'
import Fish4 from '../Animals/EgorShip.jpg'

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
      <div className="contact-card">
          <img align="center" src={Fish2}/>
          <h3><font color="#3AC1EF"> Осётр русский </font></h3>
          <p> Обитает в русловой части водохранилищ. Взрослые питаются 
            преимущественно рыбой, второстепенное значение имеют моллюски, 
            ракообразные, личинки насекомых, черви.</p>
      </div>
      <div className="contact-card">
          <img align="center" src={Fish3}/>
          <h3><font color="#3AC1EF"> Белуга </font></h3>
          <p> Проходной вид, обитает в  Каспийском море, в  реки заходит для
            размножения. Взрослая белуга питается в основном рыбой.
            Плодовитость до 7,5 млн икринок. С</p>
      </div>
      <div className="contact-card">
          <img align="center" src={Fish4}/>
          <h3><font color="#3AC1EF"> Шип </font></h3>
          <p> Длина до  2  м, масса до  30  кг. Живет не  менее 30  лет. 
            Ранее обычный промысловый вид, численность которого была подорвана 
            до создания каскада водохранилищ.</p>
      </div>
      
  </div>
    )
  }
}
