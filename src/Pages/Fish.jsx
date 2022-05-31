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
    fetch("https://gentle-brushlands-71575.herokuapp.com/api/items")
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
        <p> {list1[4]['description']}</p>
    </div>
    <div className="contact-card">
        <img align="center" src={Fish6}/>
        <h3><font color="#3AC1EF"> Белорыбица </font></h3>
        <p> {list1[5]['description']}</p>
    </div>
    <div className="contact-card">
        <img align="center" src={Fish7}/>
        <h3><font color="#3AC1EF"> Быстрянка </font></h3>
        <p> {list1[6]['description']}</p>
    </div>
    <div className="contact-card">
        <img align="center" src={Fish8}/>
        <h3><font color="#3AC1EF"> Подкаменщик обыкновенный </font></h3>
        <p> {list1[7]['description']}</p>
    </div>
</div>
    )
  }
}

}



async function GetUsers() {
  // отправляет запрос и получаем ответ
  const response = await fetch("https://gentle-brushlands-71575.herokuapp.com/api/items", {
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



