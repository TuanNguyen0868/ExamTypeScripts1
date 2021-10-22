import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import "antd/dist/antd.css";

// import Test from './components/Test.jsx';
// import Test2 from './components/Test2';
// import Login from './components/Login';
// import TabNavigator from './TabNavigator';  

ReactDOM.render(
  <React.StrictMode>
    <Header>
    </Header>
    <App />
    
    {/* <TabNavigator/> */}
    {/* <Test/>
    <Test2 name='abc'/> */}
    {/* <Login/> */}
  </React.StrictMode>,
  document.getElementById('root')
);



