import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Form from './Components/Container/Form/Form'
import Contact from './Components/Container/Contact/Contact';
import About from './Components/Container/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
        <div className="navBar">
          <Navbar />
        </div>
        <div className="contenedor shadow">
          <Route path="/form" component={Form} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </div>
        <div className="footer">
            <Footer/>
        </div>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
