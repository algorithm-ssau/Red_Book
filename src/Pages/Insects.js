import React, { Component } from 'react'
import Insect1 from '../Animals/Lentochnica.jpg'
import Insect2 from '../Animals/Anopli.jpg'
import LuHan from '../Animals/LuHan.jpg'
import ButterFly from '../Animals/Butterfly.jpg'

export default class Insects extends Component {
  render() {
    return (
      <div className="contacts">

      <div className="contact-card">
          <img align="center" src={Insect1}/>
          <h3><font color="#3AC1EF"> Ленточница розовобрюхая </font></h3>
          <p>Бабочки отмечаются в светлых лиственных лесах 
            и лесных колках в лесостепи. Гусеница в мае-июне
            питается листьями ивы козьей.</p>
      </div>
      <div className="contact-card">
          <img align="center" src={Insect2}/>
          <h3><font color="#3AC1EF"> Аноплий самарский </font></h3>
          <p>Самый крупный представитель семейства Pompilidae
            в Самарской области. Предпочитает открытые стации 
            с легкими песчаными почвами.</p>
      </div>
      <div className="contact-card">
          <img align="center" src={LuHan}/>
          <h3><font color="#3AC1EF"> Жук-олень </font></h3>
          <p>Приурочен к старым дубравам и широколиственным лесам 
            при наличии в них дуба. Самый крупный жук Европы.</p>
      </div>
      <div className="contact-card">
          <img align="center" src={ButterFly}/>
          <h3><font color="#3AC1EF"> Голубянка альцет </font></h3>
          <p>Лёт в регионе отмечен в июне–июле. В год развивается одна 
            генерация. Численность и тенденции ее изменения неизвестны.</p>
      </div>
      </div>
    )
  }
}
