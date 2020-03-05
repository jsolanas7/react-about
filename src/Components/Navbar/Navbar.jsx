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
                <a href='#'>Contacto</a>
                <a href='#'>Sobre nosotros</a>
            </div>
        </div>
    )
}


export default Navbar;