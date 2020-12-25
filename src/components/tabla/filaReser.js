import React from 'react';
import Boton from '../botones';

let keys = ['Nombre','Telefono','Fecha','Discoteca','Est reserva', 'Motivo','tipo', 'Cumpleañero', 'observacion', 'opciones'];

function FilaR({ index,cliente,
  editarEntidad=()=>{},
  eliminarEntidad=()=>{}
}) {
  return (
    <tr id="tr">
      <th id="datos" scope="row">{index+1}</th>
      <th key={`${keys[0]}=>${index+1}`}>{cliente.NombreContacto}</th>
      <th key={`${keys[1]}=>${index+1}`}>{cliente.Whastapp}</th>
      <th key={`${keys[2]}=>${index+1}`}>{cliente.FechaReserva}</th>
      <th key={`${keys[3]}=>${index+1}`}>{cliente.Discoteca}</th>
      <th key={`${keys[4]}=>${index+1}`}>{cliente.EstadoReserva}</th>
      <th key={`${keys[5]}=>${index+1}`}>{cliente.MotivoReserva}</th>
      <th key={`${keys[6]}=>${index+1}`}>{cliente.TipoReserva}</th>
      <th key={`${keys[7]}=>${index+1}`}>{cliente.NombreCumpleañero}</th>
      <th key={`${keys[8]}=>${index+1}`}>{cliente.Observaciones}</th>
      <th key={`${keys[9]}=>${index+1}`}>
      <div className="btn-group" aria-label="Basic Example">
        <Boton tipo="editar" onClick={editarEntidad}  id={cliente.id} />
        <Boton tipo="eliminar" onClick={eliminarEntidad} persona={cliente.NombreContacto} id={cliente.id} />
      </div>
      </th>
    </tr>
  )  
}

export default FilaR;