import React, { Component } from 'react'
import './App.css';
import Description from './Components/Description';
import Menu from './Components/Menu';
import Mammals from './Animals/mammals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, FormControl, Container,Button} from 'react-bootstrap';

function App() {
  return (
    <div>
     <Mammals/>
    </div>
  );
}

export default App;
