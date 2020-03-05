import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div class='containerFooter'>
            <div>
                <label>Todos los derechos reservados &copy; 2019 - {date}</label>
            </div>

        </div>
    )
}

export default Footer;