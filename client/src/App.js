import './App.css';
import React from 'react';
import Home from './Home';
import {HashRouter as Router,Switch, Route} from 'react-router-dom'
import Login from './Login';
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path ='/home'>
          <Home/>
      </Route>
      <Route path ='/'>
        <Login/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}


export default App;
