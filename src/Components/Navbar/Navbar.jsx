import React, { Fragment } from 'react';
import './Navbar.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import logoPeje from '../../Assets/peje.png';
import menuHamburguesa from '../../Assets/menuHamburguesa.png';

const Navbar = () => {
    return (
        <Fragment>
            <div className='menuContainerMobile'>
                <div>
                    <img src={menuHamburguesa} />
                </div>
            </div>
            <div className="menuContainerWeb">
                <div className="logo">
                    <img src={logoPeje} />
                </div>
                <div className="menu">
                    <button>Home</button>
                    <Link to='/form'>Formulario</Link>
                    <Link to='/contact'>Contacto</Link>
                    <Link to='/about'>Sobre nosotros</Link>
                </div>
            </div>
        </Fragment>
    )
}


export default Navbar;