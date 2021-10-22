import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FnCount from './components/FnCount';
import Usecallback from './components/Usecallback';
import UseReference from './components/UseReference';
import UserReducer from './components/UserReducer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FnCount/>
    <Usecallback/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <UseReference/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <UserReducer/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
