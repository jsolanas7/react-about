import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Form from './Components/Container/Form/Form'

function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
        <div className="navBar">
          <Navbar />
        </div>
        <div className="container shadow">
          <Route path="/form" component={Form} />
        </div>
        <div className="footer">

        </div>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
