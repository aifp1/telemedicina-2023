import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

export const Pago = ({data}) => {

    
  const [sendData, setSendData] = useState({});
    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <div className="row mb-4">
            <div className="col-12" style={{ fontSize:"xx-large", fontWeight:"bold", color:"white"}}>Informacion de la cita</div>
            <Card style={{ width: "60%", height:"auto", margin: "auto"}}>
                <Card.Body>
                    <Table>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: "left", width: "50px"}}>Cadena</td>
                                <td style={{ textAlign: "left", width: "20px"}}>Cadena</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left"}}>Fecha</td>
                                <td style={{ textAlign: "left", width: "20px"}}>{data.fecha + " " + data.hora}</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left"}}>Código de reserva</td>
                                <td style={{ textAlign: "left", width: "20px"}}>{data.id_horario}</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left"}}>Prestaciones</td>
                                <td style={{ textAlign: "left", width: "20px"}}>{data.nombre_prestacion}</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left"}}>Profesional</td>
                                <td style={{ textAlign: "left", width: "20px"}}>{data.nombre_profesional}</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left"}}>Indicación(es)</td>
                                <td style={{ textAlign: "left", width: "20px"}}>	Asistir puntualmente a edificio Consistorial (calle Condell 1490), tras 10 minutos de retraso su cita se perderá sin derecho a reembolso Asistir con su cédula de identidad o documento de identidad Llevar lentes en caso de ocupar Ser mayor de 5 años de edad No encontrarse en embarazo ni etapa de lactancia materna menor a 6 meses De usar lentes de contacto, debe sacárselos al menos 24 hrs. antes de la atención Pacientes con diabetes deben reservar primeras horas</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left"}}>Total</td>
                                <td style={{ textAlign: "right", width: "20px"}}>Total</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};
