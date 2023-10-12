import { useState } from "react";

export const Prestaciones = () => {
    const [categoria, setCategoria] = useState('-- CATEGORÍA --');
    const [prestacion, setPrestacion] = useState('-- PRESTACIONES --');
    const categorias = [
        {
            nombreCategoria: 'Receta de lentes',
            codigoCategoria: 1,
        },
        {
            nombreCategoria: 'Audifonos Clinicos',
            codigoCategoria: 2,
        }
    ];

    function cargarCategorias() {
        const items = [];
        for (let index = 0; index < categorias.length; index++) {
            items.push(<li><a className='dropdown-item'  key={categorias[index].codigoCategoria}>{categorias[index].nombreCategoria}</a></li>)
        }
        return items;
    }

    function cambiarDropdownCategoria(event){
        // console.log("Event: ", event.target.textContent);
        setCategoria(event.target.textContent)
    }
    function cambiarDropdownPrestaciones(event){
        setPrestacion(event.target.textContent);
    }

  return (
    <div className="row">
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <p className='mb-1' style={{ color: '#ffffff' }}>Seleccionar categor&iacute;a</p>
                </div>
                <div className="col-12">
                    <div className="dropdown mb-4">
                        <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            {categoria}
                        </button>
                        <ul className='dropdown-menu' onClick={cambiarDropdownCategoria}>
                            {cargarCategorias()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <p className='mb-1' style={{ color: '#ffffff' }}>Seleccionar prestaciones</p>
                </div>
                <div className="col-12">
                    <div className="dropdown mb-4">
                        <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            {prestacion}
                        </button>
                        <ul className='dropdown-menu' onClick={cambiarDropdownPrestaciones}>
                            {cargarCategorias()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
