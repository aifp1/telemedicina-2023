// import { useState } from 'react';
import { NavbarCustom } from '../../components/navbarCustom/NavbarCustom';
import { FooterCustom } from '../../components/footerCustom/FooterCustom';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import './Login.css'
import { useEffect } from 'react';

export const Login = () => {
    const { signin, isAuthenticated, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) {
            console.log("USer found in logiin: ", user.id_medico);
            if(user.id_medico != undefined){
                navigate('/auth/dashboard/medico', { state: {...user} });
            }else{
                navigate('/auth/dashboard/admin', { state: {...user} });
            }
        }
            
      }, [isAuthenticated])
    
    const handleSubmit = async(e) =>{
        signin({email: e.target[0].value, password: e.target[1].value});
        e.preventDefault();
        // const resultado = await login({email: e.target[0].value, password: e.target[1].value});
        // console.log("Resultado: ", resultado.data);
        // <Redirect to='/login/auth/dashboard/admin' state={{ ...resultado.data }}/>
    }

  return (
    <div>
        <NavbarCustom />
        <div className='className="container-fluid justify-contenten-center align-items-center login p-4 border'>
            <Link to='/' type='button' className='btn btn-danger mb-2'>Atras</Link>
            <div className='border-bottom mb-4'></div>
            <div className="container-sm">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo Electronico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='administrador@administrador.cl'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contrase&ntilde;a</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
            </div>
        </div>
        <FooterCustom />
    </div>
  )
}
