import React, { Component } from 'react'
import Insect1 from '../Animals/Lentochnica.jpg'
import Insect2 from '../Animals/Anopli.jpg'
import LuHan from '../Animals/LuHan.jpg'
import ButterFly from '../Animals/Butterfly.jpg'
import Insect3 from '../Animals/Slizen.jpg'
import Insect4 from '../Animals/Kallistus.jpg'

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
      <div className="contact-card">
          <img align="center" src={Insect3}/>
          <h3><font color="#3AC1EF"> Слизень сизо-чёрный </font></h3>
          <p>Слизни обитают в оврагах, низинах и на участках, на которых 
          при более низких и стабильных летних температурах поддерживается 
          высокая влажность. Днём скрывается под корой валежника, в гниющей древесине.</p>
      </div>
      <div className="contact-card">
          <img align="center" src={Insect4}/>
          <h3><font color="#3AC1EF"> Каллистус лунный </font></h3>
          <p>Гигрофильный вид, встречается по берегам водоемов с поверхностным покровом, 
            сформировавшимся на карбонатных породах или на размытых известняках. 
            Встречен и вдали от водоема у родника, истекающего из известняков.</p>
      </div>
      </div>
    )
  }
}
