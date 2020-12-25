import React from 'react';

function HeaderModal ({ cambiarModal=() => {}, HeaderModalText }) {
  return (
    <div className="modal-header">
      <h5 className="modal-title tituloh5" id="exampleModalLabel">{HeaderModalText}</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close"
        onClick={cambiarModal}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default HeaderModal;