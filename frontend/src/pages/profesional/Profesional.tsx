import { useEffect, useState } from "react";
import { getMedico } from "../../api/medico"

export const Profesional = ({ data , onDataFromPage}) => {
    const [profesional, setProfesional] = useState('-- PROFESIONAL --');
    const [profesionales, setProfesionales] = useState([])
    const [sendData, setSendData] = useState({});
    //console.log("Data ya en profesional: ", data);

    useEffect(() => {
        const nuevoDato = {
            state: false
        }
        setSendData(nuevoDato);
        onDataFromPage(nuevoDato); 
        getMedico(data.id_prestacion).then(function(response){
            //console.log("Response: ", response);
            setProfesionales(response.data);
        });        
    }, []);
    
    // const profesionales = [
    //     {
    //         nombreProfesional: 'Benjamin',
    //         codigoProfesional: 1,
    //     },
    //     {
    //         nombreProfesional: 'Camila',
    //         codigoProfesional: 2,
    //     },
    // ]
    function cargarProfesionales(){
        const items = [];
        for (let index = 0; index < profesionales.length; index++) {
            items.push(<li><a className='dropdown-item' key={profesionales[index].id_medico} id={profesionales[index].id_medico}>{profesionales[index].nombres + ' ' + profesionales[index].apellidos}</a></li>)
        }
        return items;
    }
    function cambiarDropdownProfesional(event){
        //console.log("Event: ", event.target.value)
        setProfesional(event.target.textContent);
        const nuevoDato = {
            id_prestacion: data.id_prestacion,
            nombre_prestacion: data.nombre_prestacion,
            id_profesional: event.target.id,
            nombre_profesional: event.target.textContent
        }
        setSendData(nuevoDato);
        onDataFromPage(nuevoDato); 
    }
  return (
    <div className="row mb-4">
        <div className="col-12">
            <p style={{ color: '#ffffff' }}> Seleccionar profesional</p>
        </div>
        <div className="col-12">
            <div className="dropdown">
                <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    {profesional}
                </button>
                <ul className='dropdown-menu' onClick={cambiarDropdownProfesional}>
                    {cargarProfesionales()}                    
                </ul>
            </div>
        </div>
    </div>
  )
}
