import React from 'react';
import './Contact.css';


const Contact = () => {
    return(
        <div className='contenedorContact'>
            <div>
                <h2>Contacto</h2>
            </div>
            <div>
                <label>Nombre</label>
                <input className='form-control'/>
            </div>
            <div>
                <label>Mensaje</label>
                <textarea className='form-control'/>
            </div>
            <div>
                <button className='btn btn-outline-primary'>Enviar</button>
            </div>
        </div>
    )
}

export default Contact;