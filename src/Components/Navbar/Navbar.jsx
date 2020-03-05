import React from 'react';
import './Navbar.css';
import { Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom';
import logoPeje from '../../Assets/peje.png';

const Navbar = () => {
    return (
        <div className="menuContainer">
            <div className="logo">
                <img src={logoPeje}/>
            </div>
            <div className="menu">
                <button>Home</button>
                <Link to='/form'>Formulario</Link>
                <Link to='/contact'>Contacto</Link>
                <Link to='/about'>Sobre nosotros</Link>
            </div>
        </div>
    )
}


export default Navbar;