import React, { Component } from 'react'
import Fish1 from '../Animals/Fish1.jpg'
import Fish2 from '../Animals/Osetr.jpg'
import Fish3 from '../Animals/BelugaBar.jpg'
import Fish4 from '../Animals/EgorShip.jpg'
import Fish5 from '../Animals/Sterlyad.jpg'
import Fish6 from '../Animals/Whitefishibicha.jpg'
import Fish7 from '../Animals/Fastandfurios.jpg'
import Fish8 from '../Animals/Understone.jpg'

let check = false;
let list1;
export default class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },

      )
      console.log(this.state.items);
  }

  render() {
    GetUsers();
    if (check)
    {
      console.log(list1[0]['description'])
      let b = 5;
    return(
    <div className="contacts">

    <div className="contact-card">
        <img align="center" src={Fish1}/>
        <h3><font color="#3AC1EF"> Форель ручьёвая </font></h3>
        <p>{list1[0]['description']}</p>
    </div>
    
    <div className="contact-card">
        <img align="center" src={Fish2}/>
        <h3><font color="#3AC1EF"> Осётр русский </font></h3>
        <p> {list1[1]['description']}</p>
    </div>
    <div className="contact-card">
        <img align="center" src={Fish3}/>
        <h3><font color="#3AC1EF"> Белуга </font></h3>
        <p> {list1[2]['description']}</p>
    </div>
    <div className="contact-card">
        <img align="center" src={Fish4}/>
        <h3><font color="#3AC1EF"> Шип </font></h3>
        <p> {list1[3]['description']}</p>
    </div>
    <div className="contact-card">
        <img align="center" src={Fish5}/>
        <h3><font color="#3AC1EF"> Стерлядь </font></h3>
        <p> Живет в реках, водохранилищах, реже в озерах. 
          Предпочитает проточные условия, биотопы с песчаным и галечным грунтом. 
          Плодовитость более 100 тыс. икринок.</p>
    </div>
    <div className="contact-card">
        <img align="center" src={Fish6}/>
        <h3><font color="#3AC1EF"> Белорыбица </font></h3>
        <p> Крупная хищная рыба, достигающая свыше 1 м длины и до 20 кг веса. 
          Размножение не чаще 3 раз в жизни с интервалами в 2 года. 
          Плодовитость до 390000 икринок.</p>
    </div>
    <div className="contact-card">
        <img align="center" src={Fish7}/>
        <h3><font color="#3AC1EF"> Быстрянка </font></h3>
        <p> В озерах и прудах встречается крайне редко. Держится постоянно 
          на поверхности и по быстроте движений превосходит уклейку. 
          Икру откладывает на мелководьях, предпочитает каменистые грунты.</p>
    </div>
    <div className="contact-card">
        <img align="center" src={Fish8}/>
        <h3><font color="#3AC1EF"> Подкаменщик обыкновенный </font></h3>
        <p> В дневное время малоактивен и прячется под камнями или в зарослях. 
          Питается донными беспозвоночными и икрой рыб. Икру рыбы откладывают
          в специально вырытые ямки или на нижнюю сторону камней.</p>
    </div>
</div>
    )
  }
}

}



async function GetUsers() {
  // отправляет запрос и получаем ответ
  const response = await fetch("http://localhost:5000/api/items", {
      method: "GET",
      headers: { "Accept": "application/json" }
  });

  // если запрос прошел нормально
      // получаем данные
  const users = await response.json();
  check = true;
      //users = users[0].name;
  //console.log(users);
  //console.log(users);
  list1 = users;
  return users;
}



