import React from 'react';
import './App.css';
import { Link, Route, Router, Switch } from 'react-router-dom';
import Home from './components/Home'
import ListSong from './components/ListSong'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listSong">List Song</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            <ListSong/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
