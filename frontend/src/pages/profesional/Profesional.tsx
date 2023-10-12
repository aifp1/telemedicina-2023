import { useState } from "react";

export const Profesional = () => {
    const [profesional, setProfesional] = useState('-- PROFESIONAL --')
    const profesionales = [
        {
            nombreProfesional: 'Benjamin',
            codigoProfesional: 1,
        },
        {
            nombreProfesional: 'Camila',
            codigoProfesional: 2,
        },
    ]
    function cargarProfesionales(){
        const items = [];
        for (let index = 0; index < profesionales.length; index++) {
            items.push(<li><a className='dropdown-item' key={profesionales[index].codigoProfesional}>{profesionales[index].nombreProfesional}</a></li>)
        }
        return items;
    }
    function cambiarDropdownProfesional(event){
        console.log("Event: ", event.target.value)
        setProfesional(event.target.textContent);
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
