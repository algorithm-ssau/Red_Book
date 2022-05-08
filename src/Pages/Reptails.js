import React, { Component } from 'react'
import Frog from '../Animals/Frog.jpg'
import Frog1 from '../Animals/Frog1.jpg'
import Reptail1 from '../Animals/Raptail1.jpg'
import Reptail2 from '../Animals/Reptail2.jpg'
import Cherep from '../Animals/Cherep.jpg'
import NormTriton from '../Animals/NormTriton.jpg'
import NeNormTriton from '../Animals/NeNormTriton.jpg'
import Shh from '../Animals/Shh.jpg'

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
      <div className="contact-card">
          <img align="center" src={Frog1}/>
          <h3><font color="#3AC1EF"> Лягушка съедобная </font></h3>
          <p>Съедобная лягушка является видом гибридного происхождения 
            от озерной P. ridibundus и прудовой P. lessonae лягушек. 
            По палеонтологическим данным, эта гибридная форма существует 
            не менее 5000 лет.</p>
      </div>
      <div className="contact-card">
          <img align="center" src={Reptail1}/>
          <h3><font color="#3AC1EF"> Ящурка разноцветная </font></h3>
          <p>Снижение численности и плотности разноцветной ящурки почти 
            в 2 раза произошло из-за уничтожения почвенного покрова 
            и нор ящериц во время спортивных занятий</p>
      </div>
      <div className="contact-card">
          <img align="center" src={Reptail2}/>
          <h3><font color="#3AC1EF"> Ящерица живородящая </font></h3>
          <p>Низкая встречаемость обусловлена не только малой 
            численностью, но и скрытным образом жизни.</p>
      </div>
      <div className="contact-card">
          <img align="center" src={Cherep}/>
          <h3><font color="#3AC1EF"> Черепаха болотная </font></h3>
          <p>Хорошо плавает и ныряет. Выходя на сушу, редко удаляется от берега. 
            Добыча, даже схваченная на берегу, заглатывается только в воде.</p>
      </div>
      <div className="contact-card">
          <img align="center" src={NormTriton}/>
          <h3><font color="#3AC1EF"> Обыкновенный тритон </font></h3>
          <p>Местообитания приурочены к лесным массивам с водоемами. Обыкновенный тритон 
            активен с середины апреля до конца сентября. Зимует на суше, весну проводит в воде.</p>
      </div>
      <div className="contact-card">
          <img align="center" src={NeNormTriton}/>
          <h3><font color="#3AC1EF"> Тритон гребенчатый </font></h3>
          <p>Гребенчатый тритон встречается в лесных водоемах и по их берегам. Активен с середины 
            апреля до конца сентября. Зимует на суше, весну и первую половину лета проводит в воде.</p>
      </div>
      <div className="contact-card">
          <img align="center" src={Shh}/>
          <h3><font color="#3AC1EF"> Медянка обыкновенная</font></h3>
          <p>Окраска верхней стороны туловища обычно серо-бурых тонов, реже красноватая 
            или медная; нижняя сторона — серая, розовая или желтоватая.</p>
      </div>
      
      
      
      
  </div>
    )
  }
}
