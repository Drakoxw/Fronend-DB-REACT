import React from "react";
import './Alert.css'

function Alert({impo, msj}) {
  return (
    <div id='alert' className="alert alert-danger alert-dismissible" role="alert">
      <strong>{impo}</strong>{msj}
        <button type="button" className="close" data-dismiss="alert" 
        aria-label="Close">
          <span aria-hidden="true"
          onClick={() => {
            const alert = document.getElementById('alert')
            alert.classList.add('cerrar')
          }}
          >&times;</span>
        </button>
    </div>
  )
}

export default Alert;