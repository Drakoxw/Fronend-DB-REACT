const API_URL = 'https://server-low.herokuapp.com'

export const listarEntidad = async(entidad) => {
  try {
    const respuesta = await fetch(`${API_URL}/${entidad}`)
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
}

export const listarEntidadReg = async({ entidad="clientes" }) => {
  try {
    const respuesta = await fetch(`${API_URL}/${entidad}`)
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
}

export const crearEditarEntidad = async({ 
  entidad="clientes", 
  objeto = {},
  method = 'POST',
  idObjeto = null
}) => {
  try {
    let url = null;
    if (method === "PUT" && idObjeto) {
      url = `${API_URL}/${entidad}/${idObjeto}`
    } else if (method === 'POST') {
      url = `${API_URL}/${entidad}`
    }
    if (!url) {
      throw new Error('No hay URL')
    }
    const respuesta = await fetch(`${url}`, {
      method,
      headers: { "Content-Type": "application/json"
    },
      body: JSON.stringify(objeto),
      mode: "cors"
    });
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
}

export const eliminarEntidad = async({
  entidad="clientes", 
  method = 'DELETE',
  idObjeto = null,
  persona 
}) => {
  try {
    let ok = prompt(`Desea Eliminar a ${persona}?\n Escribe Y para confirmar`).toUpperCase()
    let url = null;
    if (!idObjeto) throw new Error('No existe ID')
    if (ok === 'Y' && method === "DELETE" && idObjeto) {
      url = `${API_URL}/${entidad}/${idObjeto}` 
    }
    const respuesta = await fetch(`${url}`, {
      method,
      headers: { "Content-Type": "application/json"
    },
      mode: "cors"
    });
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log(`error:`, error);
  }
}