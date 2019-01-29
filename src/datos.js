import React, { Component , Fragment} from 'react';

export default {
    data: [
        {
            "tipo": "tabla",
            "columnas": ["nombre", "apellido", "tipoDocumento", "documento ", "email"],
            "columnas": [
                {
                    "field": "nombre",
                    "header": "Nombre",
                },
                {
                    "field": "apellido",
                    "header": "Apellido",
                },
                {
                    "field": "tipoDocumento",
                    "header": "Tipo de Documento",
                    "format": (value) => {
                        if (value === 1)
                            return <div className="badge badge-success">DNI</div>;
                        else if (value === 2)
                            return <div className="badge badge-danger">Cédula</div>;
                        else
                            return <div className="badge badge-warning">Pasaporte</div>;
                    },
                    "select": (value) => {
                        if (value === 1)
                            return  <Fragment>
                                        <option>DNI</option> 
                                        <option>Cédula</option>
                                        <option>Pasaporte</option>
                                    </Fragment>;
                        else if (value === 2)
                            return  <Fragment>
                                        <option>Cedula</option> 
                                        <option>DNI</option>
                                        <option>Pasaporte</option>
                                    </Fragment>;
                        else
                            return  <Fragment>
                                        <option>Pasaporte</option> 
                                        <option>DNI</option>
                                        <option>Cédula</option>
                                    </Fragment>;
                        
                    }
                },
                {
                    "field": "documento",
                    "header": "Documento",
                },
                {
                    "field": "email",
                    "header": "Email",
                }
            ]
            //"nombre", "apellido", "tipoDocumento", "documento ", "email"],
        },
        {
            "tipo": "select",
            "opciones": ["DNI", "Cédula", "Pasaporte"]
        },
        {
            "tipo": "form",
            "datos": [
                {
                    "tipo": "normal",
                    "type": "text",
                    "name": "nombre",
                    "className": "form-control",
                    "onChange": "validarString",
                    "field": "nombre",
                    "header": "Nombre",
                },
                {
                    "tipo": "normal",
                    "type": "text",
                    "name": "apellido",
                    "className": "form-control",
                    "onChange": "validarString",
                    "field": "apellido",
                    "header": "Apellido",
                },
                {
                    "tipo": "select",
                    "name": "tipo",
                    "className": "form-control",
                    "onChange": "handleTipo",
                    "field": "tipoDocumento",
                    "header": ["DNI","Cédula","Pasaporte"],
                    "select": (value) => {
                        if (value === 1)
                            return  <Fragment>
                                        <option>DNI</option> 
                                        <option>Cédula</option>
                                        <option>Pasaporte</option>
                                    </Fragment>;
                        else if (value === 2)
                            return  <Fragment>
                                        <option>Cedula</option> 
                                        <option>DNI</option>
                                        <option>Pasaporte</option>
                                    </Fragment>;
                        else
                            return  <Fragment>
                                        <option>Pasaporte</option> 
                                        <option>DNI</option>
                                        <option>Cédula</option>
                                    </Fragment>;
                        
                    }
                },
                {
                    "tipo": "normal",
                    "type": "text",
                    "name": "documento",
                    "className": "form-control",
                    "onChange": "validarNumero",
                    "field": "documento",
                    "header": "Documento",
                },
                {
                    "tipo": "normal",
                    "type": "text",
                    "name": "email",
                    "className": "form-control",
                    "onChange": "validarMail",
                    "field": "email",
                    "header": "Email",
                },
            ],
            "url": "http://10.0.0.68:81/personas/",
            "CantidadPaginas": 2
        }
    ]
}