import React from 'react';
import Encabezado from './encabezado';
import Fila from './filaReser';
import './Tabla.css';


function TablaR({
  operador,
  entidades= [],
  editarEntidad=() => {},
  crearReserva=() => {},
  eliminarEntidad=()=>{}
}) {


if (entidades.length > 0) { 
  return (
    <div id="contenedor" className="container">
      <table className="table table-striped table-dark">
        <Encabezado operador={operador}/>
        <tbody id="clientes-tabla">
        {entidades.map((clientes, index) => (
          <Fila 
            cliente={clientes} 
            index={index} 
            id={clientes.id} 
            persona={clientes.NombreContacto} 
            editarEntidad={editarEntidad}
            crearReserva={crearReserva}
            eliminarEntidad={eliminarEntidad}/>
        ))}
      </tbody>
      </table>
    </div>
  )
  }else {
    return (
      <div id="contenedor" className="container">
      <table className="table table-striped table-dark">
        <Encabezado operador={operador}/>
        <tbody id="clientes-tabla">
        <tr key='Cargandolo'><b>Cargando...</b></tr>
      </tbody>
      </table>
      </div>
    )
  }
}

export default TablaR;