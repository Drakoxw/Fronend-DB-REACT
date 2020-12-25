import React from 'react';

function Encabezado({ operador, value }) {

  if (operador === 'min') {
    return (
      <thead className="min">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Telefono</th>
          <th scope="col">Cumpleaños</th>
          <th scope="col">Sexo</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Correo</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  } 
  
  if ((operador === 'admin' && value === 'Reservas')  || value === 'Todas Reservas' || value === 'Estado de Reserva' || value === 'Por tipo de Reserva' || value === 'Promotor de Reserva'||value === 'Reser. Aceptadas' || value === 'Reser. Pendientes' || value === 'Reser. Rechazadas'|| value === 'Reser. No usadas' || value === 'Básica' || value === 'VIP') {
    return (
      <thead className="reserv">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Contacto</th>
          <th scope="col">Telefono</th>
          <th scope="col">Fecha Reserva</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Est. Reserva</th>
          <th scope="col">Motivo Reserva</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  } 
  if ((operador === 'admin' && value=== 'Clientes' )|| value === 'Todos') {
    return (
      <thead className="admin">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Telefono</th>
          <th scope="col">Cumpleaños</th>
          <th scope="col">Sexo</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Estado del contacto</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  } 
  if (value === 'En uso' || value === 'Solo whatsapp' || value === 'Sexo' || value === 'Cumpleaños' || value === 'Discoteca' || value === 'Estado del Contacto' || value === 'Reservación/Cliente' || value === 'Masculino' || value === 'Femenino' || value === 'Otro' || value === 'Este Mes' || value === 'Próximo Mes' || value === 'Próximas Semanas' || value === 'Fecha Especifica' || value === 'Morena' || value === 'Tabu' || value === 'London' || value === 'Lupe' || value === 'En uso' || value === 'Solo whatsapp' || value === 'No contesta' || value === 'Solo llamadas' || value === 'No funciona' || value === 'No usado' || value === 'Aceptadas' || value === 'No Usado'|| value === 'Pendientes'|| value === 'Rechazadas' || value === 'Una Semana'|| value === 'Dos Semanas' || value === 'Tres Semanas' || value === 'Enero' || value === 'Febrero' || value === 'Marzo' || value === 'Abril' || value === 'Mayo' || value === 'Junio' || value === 'Julio' || value === 'Agosto' || value === 'Septiembre' || value === 'Octubre' || value === 'Noviembre' || value === 'Diciembre') {
    return (
      <thead className="admin">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Telefono</th>
          <th scope="col">Cumpleaños</th>
          <th scope="col">Sexo</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Estado del contacto</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  } 
  if (operador === 'promAd') {
    return (
      <thead className="reserv">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Contacto</th>
          <th scope="col">Telefono</th>
          <th scope="col">Fecha Reserva</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Est. Reserva</th>
          <th scope="col">Motivo Reserva</th>
          <th scope="col">Tipo Reserva</th>
          <th scope="col">Cumpleañero</th>
          <th scope="col">Observación</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  } 
  if (operador === 'prom') {
    return (
      <thead className="prom">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Telefono</th>
          <th scope="col">Cumpleaños</th>
          <th scope="col">Sexo</th>
          <th scope="col">Discoteca</th>
          <th scope="col">Correo</th>
          <th scope="col">Estado del contacto</th>
          <th scope="col">Estado de reserva</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
    )
  } if (!value || value === '' ) {
    return (
      <thead>
        <tr>
          <th><b>{`-----------   SELECIONA UN FILTRO    -----------`}</b></th>
        </tr>
      </thead>
    )
  }
 
}

export default Encabezado;