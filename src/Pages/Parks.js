import React, { Component } from 'react'
import Park1 from '../Parks/Park1.jpg'
import Park2 from '../Parks/Park2.jpg'
import Park3 from '../Parks/Park3.jpg'
import Park4 from '../Parks/Park4.jpg'


export default class Parks extends Component {
  render() {
    return (
      <div className="contacts">

      <div className="contact-card">
          <img align="center" src={Park1}/>
          <h3><font color="#3AC1EF"> Жигулёвкий заповедник </font></h3>
          <p>аааааа.</p>
      </div>

      <div className="contact-card">
          <img align="center" src={Park2}/>
          <h3><font color="#3AC1EF"> Серноводский Шихан </font></h3>
          <p>ббббб.</p>
      </div>

      <div className="contact-card">
          <img align="center" src={Park3}/>
          <h3><font color="#3AC1EF"> Самарская лука </font></h3>
          <p>Государственный природный национальный парк на 
          территории Самарской Луки, в пределах Волжского,
          Ставропольского и Сызранского районов Самарской области.</p>
      </div>

      <div className="contact-card">
          <img align="center" src={Park4}/>
          <h3><font color="#3AC1EF"> Бузулукский бор </font></h3>
          <p>«Бузулукский бор» — единственное место на планете,
            где сохранились обширные сосновые рощи возрастом 300−400 лет.
            Лесной массив естественного происхождения хранит
            сосны-исполины окружностью более 4 метров.</p>
      </div>
      </div>
    )
  }
}
