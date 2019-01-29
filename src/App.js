import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Tablas from './Componentes/Tablas';
import datos from './datos.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      datos: datos.data,
      cantidadPaginas: datos.data.find(x => x.tipo === "form").CantidadPaginas,
      url: datos.data.find(x => x.tipo === "form").url
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    this.inicializar();
  
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  inicializar = () => {

    
    
    //   this.state.datos.map((e, i) => {
    //       if(e.tipo==="form")
    //       return (  
    //         e.tipo==="form" ? this.setState({cantidadPaginas: e.CantidadPaginas,url:e.url}):null
    //       );


    //   } 
    // )
  }


  render() {
    // console.log("cantidadPag---->", this.state.cantidadPaginas)
    // console.log("url------------>", this.state.url)
              
    return (
      <div className="App">

              
        <Tablas url={this.state.url}  columnas={this.state.datos} cantidad={this.state.cantidadPaginas} />
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>


      </div>
    );
  }
}

export default App;
