import React, { Component } from 'react'
import img1 from '../Animals/1.jpg'
import img2 from '../Animals/2.png'
import img3 from '../Animals/3.jpg'
import img4 from '../Animals/4.png'
import img5 from '../Animals/5.png'
import img6 from '../Animals/6.jpg'
import img7 from '../Animals/7.png'
import img8 from '../Animals/8.jpg'
import './AnimalView.css';


export default class Mammall extends Component {
  render() {
    return (
      <div className="contacts">
      <div className="contact-card">
          <img align="center" src={img1}/>
          <h3><font color="#3AC1EF">Ушастый ёж</font></h3>
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
          <h3><font color="#3AC1EF">Обыкновенный слепыш</font></h3>
          <p>Крайне редкий вид с тенденцией к росту численности.</p>
      </div>
      
      <div className="contact-card">
          <img align="center" src={img4}/>
          <h3><font color="#3AC1EF">Хомячок серый</font></h3>
          <p>Крайне редкий вид. Тенденции численности неизвестны
           В Самарской обл. </p>
      </div>

      <div className="contact-card">
          <img align="center" src={img5}/>
          <h3><font color="#3AC1EF">Гигантская вечерница</font></h3>
          <p> Относится к семейству гладконосых летучих мышей. 
            Является самой крупной летучей мышью в Европе и России.</p>
      </div>
      
      <div className="contact-card">
          <img align="center" src={img6}/>
          <h3><font color="#3AC1EF">Ночница Наттерера</font></h3>
          <p>Небольшая летучая мышь рода ночниц. Названа в 
            честь австрийского натуралиста Иоганна Наттерера. </p>
      </div>

      <div className="contact-card">
          <img align="center" src={img7}/>
          <h3><font color="#3AC1EF">Кожан поздний</font></h3>
          <p>Вид, легко осваивающий разнообразные ландшафты, 
            связан с людскими поселениями и гористыми местностями.</p>
      </div>
      
      <div className="contact-card">
          <img align="center" src={img8}/>
          <h3><font color="#3AC1EF">Европейская норка</font></h3>
          <p>Хищное млекопитающее. Водится в Восточной Европе, 
            по берегам рек, питается рыбой, лягушками, раками.  </p>
      </div>
  </div>
    )
  }
}
