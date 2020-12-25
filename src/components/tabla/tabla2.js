import React from 'react';
import Encabezado from './encabezado';
import Fila from './filas2';
import './Tabla.css';


function Tabla2({
  operador,
  entidades= [],
  editarEntidad=() => {},
}) {
  //entidades.length > 0? Object.keys(entidades[0]) : [];
if (entidades.length > 0) { 
  return (
  <div id="contenedor" className="container">
    <table className="table table-striped table-dark">
      <Encabezado operador={operador}/>
        <Fila 
        editarEntidad={editarEntidad}
        clientes={entidades} />
    
    </table>
  </div>
  )
} else {
  return (
    <div id="contenedor" className="container">
      <table className="table table-striped table-dark">
        <Encabezado operador={operador}/>
        <tbody id="clientes-tabla">
          <tr key='Cargandolo1'><b>Cargando...</b></tr>
        </tbody>
      </table>
    </div>
    )
}
}

export default Tabla2;
