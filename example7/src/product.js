import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navaction from './Components/navaction';
import Proaction from './Components/proaction';


ReactDOM.render(
  <React.StrictMode>
    <Navaction />
    <Proaction />
  </React.StrictMode>,document.querySelector('#root2'));