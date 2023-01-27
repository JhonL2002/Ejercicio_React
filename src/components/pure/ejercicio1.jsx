import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/estado.class';




const Ejercicio1 = ({contacto}) => {
    var [validar,online]= useState(true);
    var cambiar_eleccion=()=>{
        if(validar===true){
            online(validar=false);
        }else{
            online(validar=true);
        }
    }
    return (
        <div>
            <h2>Nombre:{contacto.nombre}</h2>
            <h2>Apellido:{contacto.apellido}</h2>
            <h2>Correo:{contacto.email}</h2>
            <h2>Estado de Conexión:{ validar ? 'CONECTADO':'DESCONECTADO'}</h2>
            <button onClick={cambiar_eleccion}>Cambiar estado de conexión</button>
        </div>
    );
    
};


Ejercicio1.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)

};


export default Ejercicio1;

