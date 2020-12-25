import React, { Component } from 'react';
import './App.css';

import Tabla from './components/tabla/tabla2';
import Modal from './components/modal';
import Alert from './components/alertas';
import BotonAction from './components/botones/botonAction';
import { listarEntidad, crearEditarEntidad,eliminarEntidad } from './services/servClientes'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
      entidades: [],
      objeto: {},
      idObjeto: null,
      method: 'POST',
      headerModalText: 'Nuevo registro',
      operador: ''
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
    //console.clear();
  }
  manejarInput = (ev) => {
    const { target: {value, name} } = ev;
    let {objeto} = this.state;
    objeto = { ...objeto, [name]: value }
    this.setState({ objeto })
  }
  crearEntidad = async() => {
    const { entidad } = this.props;
    const { objeto, method, idObjeto } = this.state;
    await crearEditarEntidad({ entidad, objeto, method, idObjeto});
    this.cambiarModal();
    this.listar();
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

  componentDidMount() {
    this.listar();
  }


  render() {
    const { titulo } = this.props;
    return (
      <div className="BodyPagina">
        <h2>{titulo}</h2>
        <BotonAction 
        cambiarModal={this.cambiarModal} />
        <Alert msj={'Aqui se registran los clientes sin PERMISOS ESPECIALES'}/>
        <Tabla 
          editarEntidad={this.editarEntidad}
          entidades={this.state.entidades}
          operador={this.state.operador}/>
        {this.state.mostrarModal && <Modal 
          cambiarModal={this.cambiarModal}
          manejarInput={this.manejarInput}
          crearEntidad={this.crearEntidad}
          objeto={this.state.objeto}
          operador={this.state.operador}
          headerModalText={this.state.headerModalText}/>}
      </div>  
    );
  }
}

export default Home;
