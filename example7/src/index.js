import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navaction from './Components/navaction';
import Proaction from './Components/proaction';
import Showtime from './showtime';


ReactDOM.render(
  <React.StrictMode>
    <Navaction />
    <Proaction />
    <Showtime />
  </React.StrictMode>,document.querySelector('#root'));