import React from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './components/nav';


import Pagina from './Pagina';
import Home from './home';
import Reservas from './reservas';
import Depurar from './depurar';

function App () {
  return (
    <div className="BodyPagina header">
      <Nav />

      <Switch>
        
        <Route path="/reservas">  
          <Reservas titulo="RESERVAS" entidad="reservas" operador="promAd"/>
        </Route>

        <Route path="/clientes">
          <Pagina titulo="VISTA DE CLIENTES" entidad="clientes" operador="prom"/>
        </Route>

        <Route path="/depuracion"> 
          <Depurar titulo="DEPURAR BASE DE DATOS" operador="admin"/>
        </Route>

        <Route exact path="/">
          <Home titulo="ULTIMOS CLIENTES REGISTRADOS" entidad="clientes" operador="min"/>
        </Route>

      </Switch>
    </div>
  );
}




export default App;
