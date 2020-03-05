import React from 'react';
import './Form.css';
const Form = () => {
    return(
        <div class='container'>
            <div>
                <label>Nombre</label>
                <input class="form-control"/>
            </div>
            <div>
                <label>Apellido</label>
                <input class="form-control"/>
            </div>
            <div>
                <label>E-Mail</label>
                <input class="form-control"/>
            </div>
            <div>
                <label>Dirección</label>
                <input class="form-control"/>
            </div>
            <div>
                <button type="button" class="btn btn-primary">Guardar</button>
            </div>
        </div>
    )
}



export default Form;