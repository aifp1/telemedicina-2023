import { NavbarCustom } from '../../components/navbarCustom/NavbarCustom';
import { FooterCustom } from '../../components/footerCustom/FooterCustom';
import { Link } from 'react-router-dom';
import './Login.css'

export const Login = () => {
  return (
    <div>
        <NavbarCustom />
        <div className='className="container-fluid justify-contenten-center align-items-center login p-4 border'>
            <Link to='/' type='button' className='btn btn-danger mb-2'>Atras</Link>
            <div className='border-bottom mb-4'></div>
            <div className="container-sm">
                <form>
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
