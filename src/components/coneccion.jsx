import React from 'react';
import { Contacto } from '../models/estado.class';
import Ejercicio1 from './/pure/ejercicio1';
 




const Coneccion = (props) => {

    const contacto1 = new Contacto('Jhon','Lopez','jhonf@gmail.com',Boolean);
    
    return (
        <div>
            <h1>Perfil</h1>
            <Ejercicio1 contacto={contacto1}></Ejercicio1>
        
        </div>
    );
    
};

export default Coneccion;

