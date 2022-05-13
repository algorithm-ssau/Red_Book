import React, { Component } from 'react'
import Park1 from '../Parks/Park1.jpg'
import Park2 from '../Parks/Park2.jpg'
import Park3 from '../Parks/Park3.jpg'
import Park4 from '../Parks/Park4.jpg'
import Park5 from '../Parks/Park5.jpg'
import Park6 from '../Parks/Park6.jpg'
import Park7 from '../Parks/Park7.jpg'
import Park8 from '../Parks/Park8.jpg'


export default class Parks extends Component {
  render() {
    return (
      <div className="contacts">

      <div className="contact-card">
          <img align="center" src={Park1}/>
          <h3><font color="#3AC1EF"> Жигулёвкий заповедник </font></h3>
          <p>Государственный природный заповедник, расположенный на 
            Самарской Луке, в Самарской области.Находится посреди
            самых высоких отметок Приволжской возвышенности
            (гор, в честь которых его и окрестили).</p>
      </div>

      <div className="contact-card">
          <img align="center" src={Park2}/>
          <h3><font color="#3AC1EF"> Серноводский Шихан </font></h3>
          <p>Комплексный памятник природы регионального значения,
            находящийся в окрестностях посёлка Серноводск 
            Сергиевского района Самарской области России. 
            Включает в себя обособленную возвышенность Серново́дский
            шиха́н, и прилегающую к нему территорию.</p>
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
      <div className="contact-card">
          <img align="center" src={Park5}/>
          <h3><font color="#3AC1EF"> Пещера Братьев Греве </font></h3>
          <p>Пещера, расположенная в Сокольих горах, между Коптевым и
            Студёным оврагами на берегу реки Волга в черте города Самара. 
            Своё название пещера получила по имени братьев - сыновей
            самарского аптекаря Греве. Пещера является памятником 
            природы регионального значения.</p>
      </div>

      <div className="contact-card">
          <img align="center" src={Park6}/>
          <h3><font color="#3AC1EF"> Подвальские террасы </font></h3>
          <p>Особо охраняемый геологический объект регионального значения,
             расположенный в окрестностях села Подвалье, Шигонского
             района Самарской области.</p>
      </div>

      <div className="contact-card">
          <img align="center" src={Park7}/>
          <h3><font color="#3AC1EF"> Голубое озеро </font></h3>
          <p>Озеро в Сергиевском районе Самарской области России,
            памятник природы регионального значения.</p>
      </div>

      <div className="contact-card">
          <img align="center" src={Park8}/>
          <h3><font color="#3AC1EF"> Большой Иргиз </font></h3>
          <p>Река в Самарской и Саратовской областях России,
            левый приток Волги.</p>
      </div>

      </div>
    )
  }
}
