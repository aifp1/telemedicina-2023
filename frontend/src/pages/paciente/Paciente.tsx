import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";

import { addPaciente } from '../../api/paciente';

// function validarRut(rut) {
//   rut = rut.replace(/\s|-/g, '');

//   if (!/^[0-9]+[kK]?$/.test(rut)) {
//     return false;
//   }

//   const digitos = Array.from(rut);
//   const dv = digitos.pop().toUpperCase();
//   const suma = digitos.reverse().reduce((acumulador, digito, indice) => {
//     return acumulador + parseInt(digito) * (indice % 6 + 2);
//   }, 0);

//   const resto = suma % 11;
//   const resultado = resto === 0 ? 0 : 11 - resto;

//   return (resultado === parseInt(dv)) || (dv === 'K' && resultado === 10);
// }

export const Paciente = ({data , onDataFromPage}) => {
  const [check, setCheck] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [rut, setRut] = useState('');
  const [rutValido, setRutValido] = useState(true);
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [sendData, setSendData] = useState({});

  useEffect(() => {
    // Código de efecto si es necesario
  }, []);

  // const handleCheckChange = () => {
  //   setCheck(!check);
  //   setShowForm(!showForm);
  // };

  // const handleRutChange = (event) => {
  //   const nuevoRut = event.target.value;
  //   setRut(nuevoRut);
  //   // Validar el RUT al cambiar
  //   setRutValido(validarRut(nuevoRut));
  // };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Validar el correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailIsValid(emailRegex.test(newEmail));
  };

  const almacenarPaciente = (event) => {
    event.preventDefault();
    // let lista =
    // console.log("Even: ", event);
    // console.log("Event: ", event.target);
    // for (let index = 0; index < event.target.length-1; index++) {
    //   console.log("Event: ", event.target[index].value);
    // }
    // // console.log("Event: ", event.target[0].value);
    // // console.log("Event: ", event.target[1].value);
    let objeto = {
      state:false,
      nombres: event.target[0].value,
      apellidos: event.target[1].value + ' ' + event.target[2].value,
      fecha_nacimiento: event.target[6].value,
      email: event.target[3].value,
      telefono: event.target[4].value,
      comuna: event.target[5].value,
      prevision_salud: event.target[7].value,
    }
    addPaciente(objeto).then(function(response){
      console.log("Response: ", response);
      // console.log("Pagina: ", pagina);
      setSendData({
        state: true,
        nombres: response.data.nombres,
        apellidos: response.data.apellidos,
        fecha_nacimiento: response.data.fecha_nacimiento,
        email: response.data.email,
        telefono: response.data.telefono,
        comuna: response.data.comuna,
        prevision_salud: response.data.prevision_salud,
      })
      onDataFromPage({
        state: true,
        nombres: response.data.nombres,
        apellidos: response.data.apellidos,
        fecha_nacimiento: response.data.fecha_nacimiento,
        email: response.data.email,
        telefono: response.data.telefono,
        comuna: response.data.comuna,
        prevision_salud: response.data.prevision_salud,
      })
    })
    // pagina = pagina + 1;
    console.log("Objt: ", objeto);
  }

  return (
    <div className="row mb-4">
      {/* <div className="col-12" style={{ fontSize: "xx-large", fontWeight: "bold", color: "white" }}>
        Ingrese su RUT
      </div> */}
      <Card style={{ width: "25%", height: "auto", margin: "auto" }}>
        {/* <div>
          <input
            style={{ margin: "10px", borderColor: rutValido ? '' : 'red'}}
            type="text"
            placeholder="Ejemplo: 12345678-9"
            value={rut}
            onChange={handleRutChange}
            disabled={check}
          />
        </div>
        <Form.Check
          type="checkbox"
          id="identeficacion"
          label="No poseo identificación"
          checked={check}
          onChange={handleCheckChange}
        /> */}
        
          <Form onSubmit={almacenarPaciente}>
            {/* Agrega los campos del formulario de registro aquí */}
            <Form.Group className="mb-3" controlId="Nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Apellido_Paterno">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control type="text" placeholder="Apellido Paterno" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Apellido_Materno">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control type="text" placeholder="Apellido Materno" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                style={{
                  borderColor: check && !emailIsValid ? 'red' : ''
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Telefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" placeholder="Telefono" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Direccion">
              <Form.Label>Direccion</Form.Label>
              <Form.Control type="text" placeholder="Direccion" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Fecha_Nacimiento">
              <Form.Label>Fecha Nacimiento</Form.Label>
              <Form.Control max={new Date().toISOString().split('T')[0]} type="date" placeholder="Fecha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Prevision">
              <Form.Label>Prevision</Form.Label>
              <Form.Control type="text" placeholder="Prevision" />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!rutValido || !emailIsValid}>
              Registrarse
            </Button>
          </Form>
      </Card>
    </div>
  );
};
