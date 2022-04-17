import React, { Component } from 'react'
import Frog from '../Animals/Frog.jpg'
import Frog1 from '../Animals/Frog1.jpg'
import Reptail1 from '../Animals/Reptail1.jpg'
import Reptail2 from '../Animals/Reptail2.jpg'
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
      
      
  </div>
    )
  }
}
