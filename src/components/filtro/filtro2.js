import React from 'react';
import './Filtro.css';

function Filtro2({ value,
  valueAdmin=()=>{},
  valueNum=()=>{} }) {
  if (!value || value === '') {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
        </div>
      </div>
    )
  } 
  if ( value === 'Todos' || value === 'Clientes' ) {
  return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
            <option>Estado del Contacto</option>
            <option>Reservación/Cliente</option>
          </select>
        </div>
      </div>
    )
  }
  if (value === 'Sexo' || value === 'Masculino' || value === 'Femenino' || value === 'Otro') {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
        <select name="Filtrar0" className="filtro1" id="filtro0" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
            <option>Estado del Contacto</option>
            <option>Reservación/Cliente</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el Género</option>
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
          </select>
        </div>
      </div>
    )
  }

  if (value === 'Estado del Contacto' || value === 'En uso' || value === 'Solo llamadas'|| value === 'No usado' || value === 'No contesta' || value === 'Solo whatsapp'|| value === 'No funciona' ) {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
        <select name="Filtrar0" className="filtro1" id="filtro0" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
            <option>Estado del Contacto</option>
            <option>Reservación/Cliente</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Estado</option>
            <option>En uso</option>
            <option>Solo whatsapp</option>
            <option>No contesta</option>
            <option>Solo llamadas</option>
            <option>No funciona</option>
            <option>No usado</option>
          </select>
        </div>
      </div>
    )
  }
   if (value === 'Reservación/Cliente' || value === 'Aceptadas' || value === 'No Usado'|| value === 'Pendientes'|| value === 'Rechazadas' ) {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
        <select name="Filtrar0" className="filtro1" id="filtro0" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
            <option>Estado del Contacto</option>
            <option>Reservación/Cliente</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Estado de Reservaciones</option>
            <option>Aceptadas</option>
            <option>Pendientes</option>
            <option>Rechazadas</option>
            <option>No Usado</option>
          </select>
        </div>
      </div>
    )
  }

  if (value === 'Cumpleaños' || value === 'Este Mes' || value === 'Próximo Mes' ) {
    return (
    <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
        <select name="Filtrar0" className="filtro1" id="filtro0" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
            <option>Estado del Contacto</option>
            <option>Reservación/Cliente</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Este Mes</option>
            <option>Próximo Mes</option>
            <option>Próximas Semanas</option>
            <option>Fecha Especifica</option>
          </select>
        </div>
      </div>
    )
  }

  if (value === 'Discoteca' || value === 'Morena' || value === 'Tabu' || value === 'London' || value === 'Lupe' ) {
    return (
    <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
        <select name="Filtrar0" className="filtro1" id="filtro0" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
            <option>Estado del Contacto</option>
            <option>Reservación/Cliente</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione la Discoteca</option>
            <option>Morena</option>
            <option>Tabu</option>
            <option>London</option>
            <option>Lupe</option>
          </select>
        </div>
      </div>
    )
  }

  if (value === 'Fecha Especifica' || value === 'Enero' || value === 'Febrero' || value === 'Marzo' || value === 'Abril' || value === 'Mayo'
  || value === 'Junio' || value === 'Julio' || value === 'Agosto' || value === 'Septiembre' || value === 'Octubre' || value === 'Noviembre' || value === 'Diciembre') {
    return (
    <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
        <select name="Filtrar0" className="filtro1" id="filtro0" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
            <option>Estado del Contacto</option>
            <option>Reservación/Cliente</option>
          </select>

          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Este Mes</option>
            <option>Próximo Mes</option>
            <option>Próximas Semanas</option>
            <option>Fecha Especifica</option>
          </select>

          <select name="Filtrar3" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Mes</option>
            <option>Enero</option>
            <option>Febrero</option>
            <option>Marzo</option>
            <option>Abril</option>
            <option>Mayo</option>
            <option>Junio</option>
            <option>Julio</option>
            <option>Agosto</option>
            <option>Septiembre</option>
            <option>Octubre</option>
            <option>Noviembre</option>
            <option>Diciembre</option>
          </select>
          
          <input type="number" className="filtro1 filtro2" name="Dia" id="dia" placeholder="Día" 
          onChange={(ev)=> valueNum(ev.target.value)} required />
          
        </div>
      </div>
    )
  }
  if (value === 'Próximas Semanas' || value === 'Una Semana'|| value === 'Dos Semanas' || value === 'Tres Semanas'  ) {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
        <select name="Filtrar0" className="filtro1" id="filtro0" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
            <option>Estado del Contacto</option>
            <option>Reservación/Cliente</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Este Mes</option>
            <option>Próximo Mes</option>
            <option>Próximas Semanas</option>
            <option>Fecha Especifica</option>
          </select>
          <select name="Filtrar3" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Cantidad de semanas</option>
            <option>Una Semana</option>
            <option>Dos Semanas</option>
            <option>Tres Semanas</option>
          </select>
          
        </div>
      </div>
    )
  }

  /////////////////////////////////////////////////////////

if (value === 'Reservas' || value === 'Todas Reservas' || value === 'Promotor de Reserva') {
  return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Todas Reservas</option>
            <option>Estado de Reserva</option>
            <option>Por tipo de Reserva</option>
            <option>Promotor de Reserva</option>
          </select>
        </div>
      </div>
    )
  }
  if (value === 'Por tipo de Reserva'|| value === 'Básica' || value === 'VIP') {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Todas Reservas</option>
            <option>Estado de Reserva</option>
            <option>Por tipo de Reserva</option>
            <option>Promotor de Reserva</option>
          </select>
          <select name="Filtrar3" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el Tipo</option>
            <option>Básica</option>
            <option>VIP</option>
          </select>
        </div>
      </div>
    )
  }
  
  if (value === 'Estado de Reserva' ||value === 'Reser. Aceptadas' || value === 'Reser. Pendientes' || value === 'Reser. Rechazadas'|| value === 'Reser. No usadas' ) {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Todas Reservas</option>
            <option>Estado de Reserva</option>
            <option>Por tipo de Reserva</option>
            <option>Promotor de Reserva</option>
          </select>
           <select name="Filtrar3" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el Estado</option>
            <option>Reser. Aceptadas</option>
            <option>Reser. Pendientes</option>
            <option>Reser. Rechazadas</option>
            <option>Reser. No usadas</option>
          </select>
        </div>
      </div>
    )
  }  
  if (value === 'Por tipo de Reserva' ||value === 'Básica' || value === 'VIP' ) {
  return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Todas Reservas</option>
            <option>Estado de Reserva</option>
            <option>Por tipo de Reserva</option>
            <option>Promotor de Reserva</option>
          </select>
           <select name="Filtrar3" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el Tipo</option>
            <option>Básica</option>
            <option>VIP</option>
          </select>
        </div>
      </div>
    )
  } 
  if (value === 'Promotor de Reserva' ||value === 'Promotor 1' || value === 'Promotor 2' || value === 'Promotor 3' ) {
    return (
      <div id="filtroComp">
        <div >
            <h5>Selecionar filtros</h5>
          </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Todas Reservas</option>
            <option>Estado de Reserva</option>
            <option>Por tipo de Reserva</option>
            <option>Promotor de Reserva</option>
          </select>
           <select name="Filtrar3" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el Promotor</option>
            <option>Promotor 1</option>
            <option>Promotor 2</option>
            <option>Promotor 3</option>
          </select>
        </div>
      </div>
    )
  } else {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Reservas</option>
            <option>Clientes</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Filtro2;