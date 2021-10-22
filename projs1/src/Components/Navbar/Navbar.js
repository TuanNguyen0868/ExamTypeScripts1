import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import ListNav from './ListNav'

export default function Navbar() {
    return (
        <Router>
            <div className='session-nav'>
                <ul className='navbar'>
                    {
                        ListNav.map(item =>{
                            return <li className='nav-item'><Link to = {item.path}>{item.navName}</Link></li>
                        })
                    }
                </ul>
                <Switch>
                    {
                        ListNav.map(item =>{
                            return <Route path={item.path}>
                                {item.components}
                            </Route>
                        })
                    }
                </Switch>
            </div>
        </Router>
    )
}
