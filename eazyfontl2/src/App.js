import React, { Suspense } from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound'



const Photo = React.lazy(()=> import('./features/Photo'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading..............</div>}>
        <BrowserRouter>
          <ul>
            <li><Link to='/photos'>Photo</Link></li>
            <li><Link to='/photos/add'>Add Photo</Link></li>
            <li><Link to='/photos/edit'>Edit Photo</Link></li>
          </ul>
          <Switch>
            <Redirect exact from="/" to="/photos"/>

            <Route path="/photos" component={Photo}/>

            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
