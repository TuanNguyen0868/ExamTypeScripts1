import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Listnav } from "./components/ListNav";

export default function App() {
  return (
    <Router>
      <div className="nav">
        <ul className="nav-content" >
          {
            Listnav.map(item => {
              return<li className="item-nav" key={item.id} >
            <Link to={item.path} >{item.cmpName}</Link>
          </li>
            })
          }
        </ul>

        <Switch>
          {
            Listnav.map(item => {
              return<Route path={item.path} key={item.id}>
              {item.components}
            </Route>
            })
          }
        </Switch>
      </div>
    </Router>
  );
}



