import { useEffect } from "react";
import { Card, Table } from "react-bootstrap";

export const Pago = ({}) => {
    useEffect(() => {
        // Código de efecto si es necesario
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
                                <td style={{ textAlign: "left", width: "20px"}}>Fecha</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left"}}>Código de reserva</td>
                                <td style={{ textAlign: "left", width: "20px"}}>Código de reserva</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left"}}>Prestaciones</td>
                                <td style={{ textAlign: "left", width: "20px"}}>Prestaciones</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left"}}>Profesional</td>
                                <td style={{ textAlign: "left", width: "20px"}}>Profesional</td>
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
