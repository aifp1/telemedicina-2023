import { ReactNode, useEffect, useState } from "react";
import { getCategorias } from "../../api/categorias";
import { getPrestaciones } from "../../api/prestaciones";

export const Prestaciones = ({ onDataFromPage }) => {
    const [categoria, setCategoria] = useState('-- CATEGORÍA --');
    const [prestacion, setPrestacion] = useState('-- PRESTACIONES --');
    const [categorias, setCategorias] = useState([]);
    const [prestaciones, setPrestaciones] = useState([]);
    const [elementosLi, setElementosLi] = useState<ReactNode[]>([]);
    const [evento, setEvento] = useState(false);

    const [sendData, setSendData] = useState({});
    
    // let senData: any = {};

    useEffect(() => {
        getCategorias.then(function(response){
            setCategorias(response.data);
        });
        getPrestaciones.then(function(response){
            setPrestaciones(response.data);
        });

        const nuevoDato = {
            state:false
        }
        setSendData(nuevoDato);
        onDataFromPage(nuevoDato);  

    }, []);
  
    function cargarCategorias() {
        const items = [];
        for (let index = 0; index < categorias.length; index++) {
            items.push(<li><a className='dropdown-item' key={categorias[index].id_categoria} id={categorias[index].id_categoria}>{categorias[index]?.nombre_categoria}</a></li>)
        }
        return items;
    }
    function cargarPrestaciones(id_categoria: number) {
        const items = [];
        prestaciones.map(prestacion => {
            if(prestacion.id_categoria == id_categoria){
                items.push(<li><a className='dropdown-item' key={prestacion.id_prestacion} id={prestacion.id_prestacion}>{prestacion.nombre_prestacion}</a></li>)
            }
        })
        setElementosLi(items);
    }    
    
    async function cambiarDropdownCategoria(event){
        // setSendData({
        //     nombre_categoria: event.target.textContent,
        //     id_categoria: event.target.id,
        // });
        setElementosLi([]);
        setPrestacion('-- PRESTACIONES --');
        setCategoria(event.target.textContent);
        cargarPrestaciones(event.target.id);
        setEvento(true);        
    }
    function cambiarDropdownPrestaciones(event){
        setPrestacion(event.target.textContent);
        //console.log("Send DAta: ", event.target.id);
        const nuevoDato = {
            state:true,
            id_prestacion: event.target.id,
            nombre_prestacion: event.target.textContent,
        }
        setSendData(nuevoDato);
        onDataFromPage(nuevoDato);        
        // enviarDatos();
    }
    function enviarDatos(){
        console.log("Send Daaaata final: ", sendData);    
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
                            <button className='btn btn-secondary w-sm-auto dropdown-toggle text-wrap' type='button' data-bs-toggle='dropdown' aria-expanded='false' disabled={evento ? false: true}>
                                {prestacion}
                            </button>
                            <ul className='dropdown-menu w-sm-auto' onClick={cambiarDropdownPrestaciones} >
                                {elementosLi.map(elementoLi => elementoLi)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
