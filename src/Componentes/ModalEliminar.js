import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
class ModalEliminar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        }
    }
    
    toggle= ()=> {
        this.setState({
            modal: !this.state.modal
        });
        //this.handleSubmit();
    }

    eliminar  = () =>{

        axios.delete('http://10.0.0.68:81/personas/'+this.props.id)
            .then( (response)=> {
                    // this.actualizar();
                    // console.log("valos del props actualizar: ",this.props.actualizar);
                    if(this.props.actualizar)
                        this.props.actualizar();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        this.toggle();
    }

    render() {
        return (  
          <div>
            {/* <Button color="danger" onClick={()=>this.eliminar(persona.id)}>Eliminar</Button> */}

            <Button color="danger" onClick={this.toggle}>Eliminar</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Eliminar</ModalHeader>
              <ModalBody>
                ¿Esta seguro que desa eliminar?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>this.eliminar()}>Eliminar</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
}

export default ModalEliminar;