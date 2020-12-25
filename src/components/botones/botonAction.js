import React from 'react';
import './boton.css';

function BotonAction({ cambiarModal = () => {} }) {
  return (
    <div className="Action-modal">
      <button type="button" className="btn btn-nuevo"
      onClick={cambiarModal} >
        Nuevo Cliente
      </button>
    </div>
  ); 
}

export default BotonAction;