import React, { Component } from 'react';
import './App.css';
import Modal from './components/modal';
import Alert from './components/alertas';
import Tabla from './components/tabla/tablaReservas';
import { listarEntidad, crearEditarEntidad, eliminarEntidad} from './services/servClientes'
import { crearEditarReserva } from './services/servReservas'


class Reservas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
      entidades: [],
      objeto: {},
      objetoR: {},
      idObjeto: null,
      method: 'POST',
      headerModalText: 'Nuevo registro',
      operador: '',
      value: '',
      num: NaN
    };
  }

  cambiarModal = (_ev, method="POST", headerModalText='Nuevo registro') => {
    if (method === 'POST') {
      this.setState({ objeto: {} })
    }
    this.setState({mostrarModal: !this.state.mostrarModal, method, headerModalText})
  }

  listar = async() => {
    const {entidad, operador} = this.props;
    const entidades = await listarEntidad(entidad);
    this.setState({ entidades, operador })
  }
  manejarInput = (ev) => {
    const { target: {value, name} } = ev;
    let {objeto} = this.state;
    objeto = { ...objeto, [name]: value }
    console.log(objeto);
    this.setState({ objeto })
  }
  manejarValue = (ev, _num) => {
    let { target: {value} } = ev;
    const num = parseInt(_num);
    this.setState({ value, num })
  }
  manejarNum = (_num) => {
    const num = parseInt(_num);
    this.setState({ num })
    console.log(num);
  }
  crearEntidad = async() => {
    const { entidad } = this.props;
    const { objeto, method, idObjeto } = this.state;
    await crearEditarEntidad({ entidad, objeto, method, idObjeto});
    this.cambiarModal();
    this.listar();
  }
  
  crearReserva = async(objeto) => {
    let objetoR = objeto;
    await crearEditarReserva({ objetoR })
  }

  editarEntidad = async(ev, id) => {
    let objetox
    let objeto = { ...this.state.entidades };
    for (let el in objeto){
      if(objeto[el].id === id) {objetox = objeto[el]}  
    }
    objeto= objetox
    this.setState({ objeto, idObjeto: id }, ()=> {
      this.cambiarModal(null, 'PUT', 'Editar cliente')
    })
  };
  eliminarEntidad = async(ev, id, persona) => {
    const { entidad } = this.props;
    await eliminarEntidad({ entidad, idObjeto: id, persona });
    this.listar();
  }
  eliminarReserva = async(ev, id, persona) => {
    const { entidad } = this.props;
    await eliminarEntidad({ entidad, idObjeto: id, persona });
    this.listar();
  }

  componentDidMount() {
    this.listar();
    console.clear()
  }

  render() {
    const { titulo } = this.props;
    return (
      <div className="BodyPagina">
        <h2>{titulo}</h2>
        <Alert impo={'Zona Admin '} 
        msj={'Aqui se vistan las Reservas con opción de EDITAR o ELIMINAR'}/>
        <Tabla 
          operador={this.state.operador}
          eliminarEntidad={this.eliminarReserva}
          editarEntidad={this.editarEntidad}
          entidades={this.state.entidades}/>

        {this.state.mostrarModal && <Modal 
          cambiarModal={this.cambiarModal}
          manejarInput={this.manejarInput}
          crearEntidad={this.crearEntidad}
          objeto={this.state.objeto}
          headerModalText={this.state.headerModalText}
          operador={this.props.operador}
          />}
      </div>  
    );
  }
}

export default Reservas;
