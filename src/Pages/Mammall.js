import React, { Component } from 'react'
import img1 from '../Animals/1.png'
import img2 from '../Animals/2.png'
import img3 from '../Animals/3.png'
import img4 from '../Animals/4.png'
import './Mammall.css';


export default class Mammall extends Component {
  render() {
    return (
      <div className="contacts">
      <div className="contact-card">
          <img align="center" src={img1}/>
          <h3><font color="#3AC1EF">▍Ушастый ёж</font></h3>
          <p>Распространен в Северо-
            Восточной Африке, в Евразии — от юго-востока
            Европы до Центральной Азии</p>
      </div>
      
      <div className="contact-card">
          <img align="center" src={img2}/>
          <h3><font color="#3AC1EF">Степная пищуха</font></h3>
          <p>Зимой ведет подснежный образ жизни, 
            прокладывая ходы длинной до 40 м.</p>
      </div>
      
      <div className="contact-card">
          <img align="center" src={img3}/>
          <h3><font color="#3AC1EF">▍Обыкновенный слепыш</font></h3>
          <p>Крайне редкий вид с тенденцией к росту численности.</p>
      </div>
      
      <div className="contact-card">
          <img align="center" src={img4}/>
          <h3><font color="#3AC1EF">Хомячок серый</font></h3>
          <p>Крайне редкий вид. Тенденции численности неизвестны.
           В Самарской обл. находится на северной грани-</p>
      </div>
  </div>
    )
  }
}
