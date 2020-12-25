import React from 'react';
import Boton from '../botones';
function FilaR({ clientes,
  editarEntidad=()=>{},
}) {
  let x = clientes.length
  if (x > 3) {
    return (
      <tbody id="clientes-tabla">
        <tr id="tr">
          <th id="datos" scope="row">{1}</th>
          <th key={`1-`}>{clientes[x-1].Nombre}</th>
          <th key={`1w`}>{clientes[x-1].Whastapp}</th>
          <th key={`1r`}>{clientes[x-1].Dia}-{clientes[x-1].Mes}-{clientes[x-1].Año}</th>
          <th key={`1y`}>{clientes[x-1].Sexo}</th>
          <th key={`1h-`}>{clientes[x-1].Discoteca}</th>
          <th key={`1j-`}>{clientes[x-1].Correo}</th>
          <th key={`1w-`}>
          <div className="btn-group" aria-label="Basic Example">
            <Boton tipo="editar" onClick={editarEntidad} id={clientes[x-1].id} persona={clientes[x-1].Nombre} />
          </div>
          </th>
        </tr> 
  
        <tr id="tr">
          <th id="datos" scope="row">{2}</th>
          <th key={`1-`}>{clientes[x-2].Nombre}</th>
          <th key={`1w`}>{clientes[x-2].Whastapp}</th>
          <th key={`1r`}>{clientes[x-2].Dia}-{clientes[x-2].Mes}-{clientes[x-2].Año}</th>
          <th key={`1y`}>{clientes[x-2].Sexo}</th>
          <th key={`1h-`}>{clientes[x-2].Discoteca}</th>
          <th key={`1j-`}>{clientes[x-2].Correo}</th>
          <th key={`1w-`}>
          <div className="btn-group" aria-label="Basic Example">
            <Boton tipo="editar" onClick={editarEntidad} id={clientes[x-2].id} persona={clientes[x-2].Nombre}  />
          </div>
          </th>
        </tr> 
  
        <tr id="tr">
          <th id="datos" scope="row">{3}</th>
          <th key={`1-`}>{clientes[x-3].Nombre}</th>
          <th key={`1w`}>{clientes[x-3].Whastapp}</th>
          <th key={`1r`}>{clientes[x-3].Dia}-{clientes[x-3].Mes}-{clientes[x-3].Año}</th>
          <th key={`1y`}>{clientes[x-3].Sexo}</th>
          <th key={`1h-`}>{clientes[x-3].Discoteca}</th>
          <th key={`1j-`}>{clientes[x-3].Correo}</th>
          <th key={`1w-`}>
          <div className="btn-group" aria-label="Basic Example">
            <Boton tipo="editar" onClick={editarEntidad} id={clientes[x-3].id} persona={clientes[x-3].Nombre}  />
          </div>
          </th>
        </tr> 
      </tbody>
    )
  } else {
    return <p>Cargando...</p>
  }
  //let i = Object.keys(clientes)
}
export default FilaR;

