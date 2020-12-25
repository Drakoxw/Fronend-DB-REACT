import React from 'react';
import './Filtro.css';

function Filtro({ value, num,
  valueAdmin=()=>{},
  valueNum=()=>{} }) {
  if (value === '' || value === 'Todos') {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
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
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
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
  if (value === 'Cumpleaños' || value === 'Este Mes' || value === 'Próximo Mes' ) {
    return (
    <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
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
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el Discoteca</option>
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
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
          </select>

          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Este Mes</option>
            <option>Próximo Mes</option>
            <option>Próximas Semanas</option>
            <option>Fecha Especifica</option>
          </select>

          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
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
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Este Mes</option>
            <option>Próximo Mes</option>
            <option>Próximas Semanas</option>
            <option>Fecha Especifica</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro3" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Cantidad de semanas</option>
            <option>Una Semana</option>
            <option>Dos Semanas</option>
            <option>Tres Semanas</option>
          </select>
          
        </div>
      </div>
    )
  }

  if (num < 1 ) {
    return (
      <div id="filtroComp">
        <div >
          <h5>Selecionar filtros</h5>
        </div>
        <div id="filter" className="form-group">
          <select name="Filtrar" className="filtro1" id="filtro1" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Sexo</option>
            <option>Cumpleaños</option>
            <option>Discoteca</option>
            <option>Todos</option>
          </select>
          <select name="Filtrar2" className="filtro1" id="filtro2" onChange={(ev)=> valueAdmin(ev)} required>
            <option hidden >Seleccione el filtro</option>
            <option>Este Mes</option>
            <option>Próximo Mes</option>
            <option>Próximas Semanas</option>
            <option>Fecha Especifica</option>
          </select>
          <input type="number" className="filtro1" name="Dia" id="dia" placeholder="Días a partir de hoy" 
          onChange={(ev)=> valueAdmin(ev, ev.target.value)} required />
          <p><b>Error! </b></p>
          <label className="btn-error "><b>Valores invalidos</b></label>
        </div>
      </div>
    )
  }
}

export default Filtro;