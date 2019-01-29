import React, { Component } from 'react';
import { Button, Table,Row, Col,Label, Form, Input, FormGroup} from 'reactstrap';
import axios from 'axios';
import ModalG from './ModalG'
import ModalEliminar from './ModalEliminar';

class Tablas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            BD: [],
            meta: [],
            posPag:0,
            filtrar:'',
            totalPaginas:0
        };
       
        axios.get(this.props.url+"?"+"pageSize="+this.props.cantidad)
            .then((response) => {
               
                this.setState({ BD: response.data.data, meta: response.data.meta,totalPages: response.data.meta.totalPages}, () => {
                    
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    actualizar =(e)=>{

        console.log("LLamo a la funcion Actualizar");

        const pos= (this.state.posPag) % this.state.meta.totalPages
        
        axios.get(this.props.url+"?"+"pageSize="+this.props.cantidad+"&page="+pos+"&nombre[icontains]="+this.state.filtrar)
            .then((response)=> {
                // console.log("Datos de la BD: ",response.data.data);
                this.setState({ BD: response.data.data, meta: response.data.meta}, () => {
              });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleSiguiente = ()=>{
        console.log("Entro en Sieguiente");
        let pos=this.state.posPag+1;
        console.log("pagina siguiente: ",pos);
        pos= (pos) % this.state.meta.totalPages
        
        /*Acá la Funcion Actualizar se va a ejecutar luego de que se setee el Estado,
        Ya que el setState es ASINCRONICO*/ 
        this.setState(
            ()=>({posPag: pos}),this.actualizar
        );
    }

    handleAnterior = ()=>{
        console.log("Entro en Anterios");
        let pos2=this.state.posPag-1;
        if(pos2<0)
            pos2=0;
        pos2= (pos2) % this.state.meta.totalPages
        this.setState(
            ()=>({posPag: pos2}),this.actualizar
        );
    }

    handleFiltrar = (e)=>{
     
        const { value, name } = e.target;
        console.log("valor ---->",value);

        this.setState({filtrar: value});

        // axios.get(this.props.url+"?"+"&nombre[icontains]=")
        //     .then((response)=> {
        //         // console.log("Datos de la BD: ",response.data.data);
        //         this.setState({ BD: response.data.data}, () => {
        //       });
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    actionFiltrar = (e)=>{
        const pos= (this.state.posPag) % this.state.meta.totalPages

        axios.get(this.props.url+"?"+"pageSize="+this.props.cantidad+"&page="+pos+"&nombre[icontains]="+this.state.filtrar)
        .then((response)=> {
            // console.log("Datos de la BD: ",response.data.data);
            this.setState({ BD: response.data.data, meta: response.data.meta}, () => {
          });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    
    render() {
        return (
            
            <div>
                {/* {console.log("Cantidad de paginas:-----> ",this.state.meta.totalPages)}
                {console.log("Columnas: ", this.props.columnas)} */}
                <ModalG nombre={"Cargar"} actualizar={this.actualizar} columnas={this.props.columnas} />
                <Table dark>
                    <thead>
                        {/* Aca genero todas las Columnas dependiendo del contenido de la BD */}
                        <tr>
                            {
                                this.props.columnas.map((persona, i) => (
                                        //console.log("persona",persona)
                                        persona.tipo === "tabla" ?
                                            persona.columnas.map((col, i) =>
                                                <td key={i} >{col.header}</td>
                                            ):
                                            null
                                    )
                                )
                            } 
                        </tr>
                    </thead>
                    <tbody >
                        {/* {console.log("dentro de la tabla")}
                        {console.log(this.state.BD)} */}
                        {this.state.BD.map((persona, i) =>
                            <tr key={i}>
                                {
                                    this.props.columnas.map((e, i) => {
                                        // console.log("PERSONA: ", e.tipo)
                                        return (
                                            e.tipo === "tabla" ?
                                                e.columnas.map((col, i) => {
                                                    // console.log("col: ", col)
                                                    return (
                                                        <td key={i}>{col.format ? col.format(persona[col.field]) : persona[col.field]}</td>
                                                    );

                                                    }
                                                ):
                                                null
                                        );
                                    }
                                    )}
                                {/* {this.props.columnas.map((col,i)=>
                                    <td>{persona[col]}</td>     
                                )}  */}
                                <td> <ModalG nombre={"Actualizar"} persona={persona} actualizar={this.actualizar} columnas={this.props.columnas} /> </td>
                                <td> <ModalEliminar actualizar={this.actualizar} id={persona.id} /></td>
                                {/* <td> <Button color="danger" onClick={()=>this.eliminar(persona.id)}>Atualizar</Button> </td> */}
                            </tr>
                        )}
                    </tbody>
                </Table>
                 

                <Row>
                    <Col xs="4">
                        <Button color="danger" onClick={this.handleAnterior}>Anterior</Button>
                    </Col>
                    <Col xs="4">
                        <h1>
                            <Label color="success">{this.state.posPag}</Label>
                        </h1>
                    </Col>
                    <Col xs="4">
                        <Button color="danger" onClick={this.handleSiguiente}>Siguiente</Button>
                    </Col>
                </Row>

                <Row>
                    
                </Row>

                <form >
                    <FormGroup>
                    <Col xs="2">
                        <Input name="filtrado" placeholder="Filtrar" onChange={this.handleFiltrar}/><br />   
                    </Col>
                    <Col xs="2">
                        <Button color="danger" onClick={this.actionFiltrar}>Filtrar</Button>
                    </Col>
                                         
                    </FormGroup>
                </form>
                   
                    
               
               
            </div>
        );
    }

}

export default Tablas;