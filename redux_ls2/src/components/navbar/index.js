import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { NavData } from '../../common/NavData'

export default function Navbar() {
    return (
        <BrowserRouter >
      <div className="App">
        <ul className="Nav-Item">
          {
            NavData.map(item => {
              return<li className="nav-item" key={item.id}>
                <Link to={item.path} ><span>{item.cmpName}</span></Link>
              </li>
            })
          }
        </ul>
        <Switch>
          {
            NavData.map(item => {
              return<Route path={item.path} key={item.id}>
                {item.components}
              </Route>
            })
          }
        </Switch>
      </div>
    </BrowserRouter>
    )
}
