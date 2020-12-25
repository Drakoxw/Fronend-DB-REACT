import React from 'react';

function FooterModal ({ 
  cambiarModal=() => {}, 
  crearEntidad=()=>{} 
}) {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal"
      onClick={cambiarModal}
      >Cerrar</button>
      <button type="button" id="guardar" data-dismiss="modal" className="btn btn-primary"
      onClick={crearEntidad}
      >Guardar</button>
    </div>
  );
}

export default FooterModal;