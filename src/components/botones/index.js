import classNames from 'classnames';
import React from 'react';
import './boton.css';

function Boton({objeto, id, persona, onClick, tipo}) {
  return (
    <button type="button" 
    className={classNames("btn",{
      "btn-info": tipo=== "editar",
      "btn-danger": tipo=== "eliminar",
      "btn-buscar": tipo=== "buscar",
      "btn-buscar": tipo=== "crear"
    })}
    data-id={id}
    onClick={(ev)=> onClick( objeto, id, persona, ev)}>
      { tipo==="editar"? <b>Editar</b>: <></>}
      { tipo==="eliminar"? <b>Eliminar</b>: <></>}
      { tipo==="buscar"? <b>Buscar</b>: <></>}
      { tipo==="crear"? <b>Reservar</b>: <></>}
    </button>
  );
}

export default Boton;