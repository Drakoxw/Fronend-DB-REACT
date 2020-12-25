const API_URL = 'https://server-low.herokuapp.com'

export const crearEditarReserva =async({
  objetoR = {},
  entidad='reservas',
  method= 'POST',
  idObjeto = null
}) => {
  console.log(`objetoR`, objetoR);
  try {
    let url = null;
    if (method === 'PUT' && idObjeto) {
      url = `${API_URL}/${entidad}/${idObjeto}`
    } 
    if (method === 'POST') {
      url = `${API_URL}/${entidad}`
    }
    if (!url) {
      throw new Error ('No existe Url De reservas')
    }
    const respuesta = await fetch(`${url}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(objetoR),
      mode: "cors"
    });
    const datos = await respuesta.json();
    alert('Se ha creado una Nueva reserva!')
    return datos
  } catch (error) {
    console.log(`error`, error);
  }
}

export const eliminarReserva = async({
  entidad="reservas", 
  method = 'DELETE',
  idObjeto = null,
  persona 
}) => {
  try {
    let ok = prompt(`Desea Eliminar la reserva de ${persona}?\n Escribe Y para confirmar`).toUpperCase()
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