import React, { Component } from 'react';
import './App.css';
import Filtro from './components/filtro/filtro2';
import Alert from './components/alertas';
import Tabla from './components/tabla/tablaDep';
import Modal from './components/modal';
import { listarEntidad, crearEditarEntidad, eliminarEntidad} from './services/servClientes';


class Depurar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostrarModal: false,
      entidades: [],
      objeto: {},
      value: '',
      entidadN: '',
      idObjeto: null,
      method: 'POST',
      num: NaN,
      headerModalText: 'Nuevo registro'
    };
  }
  
  cambiarModal = (_ev, method="POST", headerModalText='Nuevo registro') => {
    if (method === 'POST') {
      this.setState({ objeto: {} })
    }
    this.setState({mostrarModal: !this.state.mostrarModal, method, headerModalText})
  }

  listar = async() => {
    const { operador } = this.props;
    const { value } = this.state;
    let entidad = 'clientes';
    const llamar = async(ent, val) => {
      let entidades = []
      if (!val) {
        entidades = await listarEntidad(ent);
        this.setState({ entidades,operador })
      }
      if (val === 'Reservas') {
        entidades = await listarEntidad('reservas');
        this.setState({ entidades,operador })
      }
      if (val === 'Clientes') {
        entidades = await listarEntidad('clientes');
        this.setState({ entidades,operador })
      }
      return entidades
    }
    llamar(entidad, value)
  }

  manejarInput = (ev) => {
    const { target: {value, name} } = ev;
    let {objeto} = this.state;
    objeto = { ...objeto, [name]: value }
    this.setState({ objeto })
  }
  manejarValue = (ev, _num) => {
    let { target: {value} } = ev;
    const num = parseInt(_num);
    this.setState({ value, num })
    if (value === 'Clientes' || value === 'Reservas') {
      setTimeout(() => {
        this.listar();
      },10)
    }
  }
  manejarNum = (_num) => {
    const num = parseInt(_num);
    this.setState({ num })
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
    console.clear();
  }

  render() {
    const { titulo } = this.props;
    return (
      <div className="BodyPagina">
        <h2>{titulo}</h2>
        <Filtro 
          num={this.state.num}
          entidades={this.state.entidades}
          valueAdmin={this.manejarValue}
          valueNum={this.manejarNum}
          value={this.state.value}
          />
          <Alert impo={'Zona Super Admin '} 
        msj={'Acceso Total a las Bases de Datos, con opciones de DEPURAR la Base de Datos'}/>
        <Tabla
          value={this.state.value}
          num={this.state.num}
          eliminarEntidad={this.eliminarEntidad}
          editarEntidad={this.editarEntidad}
          cambiarEntidad={this.cambiarEntidad}
          operador={this.state.operador}
          entidades={this.state.entidades}
          />
        {this.state.mostrarModal && <Modal 
          cambiarModal={this.cambiarModal}
          manejarInput={this.manejarInput}
          crearEntidad={this.crearEntidad}
          objeto={this.state.objeto}
          headerModalText={this.state.headerModalText}
          />}
      </div>  
    );
  }
}

export default Depurar;
