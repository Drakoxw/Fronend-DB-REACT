import React from 'react';
import Boton from '../botones';

let key = ['Nombre','Telefono','Cumple','Sexo','Discoteca','Correo', 'Contacto','Reserva'];

function Fila({ index,cliente,
  editarEntidad=()=>{},
  crearReserva=()=>{} 
}) {
  return (
    <tr id="tr">
      <th id="datos" scope="row">{index+1}</th>
      <th key={`${key[0]}=>${index+1}`}>{cliente.Nombre}</th>
      <th key={`${key[1]}=>${index+1}`}>{cliente.Whastapp}</th>
      <th key={`${key[2]}=>${index+1}`}>{cliente.Dia}-{cliente.Mes}-{cliente.Año}</th>
      <th key={`${key[3]}=>${index+1}`}>{cliente.Sexo}</th>
      <th key={`${key[4]}=>${index+1}`}>{cliente.Discoteca}</th>
      <th key={`${key[5]}=>${index+1}`}>{cliente.Correo}</th>
      <th key={`${key[6]}=>${index+1}`}>{cliente.ContactoActivo}</th>
      <th key={`${key[7]}=>${index+1}`}>{cliente.EstadoReserva}</th>
      <th key={`${key[8]}=>${index+1}`}>
      <div className="btn-group" aria-label="Basic Example">
        <Boton tipo="editar" onClick={editarEntidad} id={cliente.id} />
        <Boton tipo="crear" onClick={crearReserva} objeto={
          {id_cliente: cliente.id,
          NombreContacto: cliente.Nombre,
          Whastapp: cliente.Whastapp,
          EstadoReserva: cliente.EstadoReserva,
          Discoteca: cliente.Discoteca}
        }/>
      </div>
      </th>
    </tr>
  )  
}

export default Fila;