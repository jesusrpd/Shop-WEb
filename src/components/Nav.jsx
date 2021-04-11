import React, { useState } from 'react';
import {ReactComponent as LogoIcon} from '../assets/SVG/logo.svg';
import {ReactComponent as CasaIcon} from '../assets/SVG/casa.svg';
import {ReactComponent as CarritoIcon} from '../assets/SVG/carrito.svg';
import {Link} from 'react-router-dom';
import Cookie from 'universal-cookie';

const Nav = ({onClick})=>{

    const cookies = new Cookie();
    const [auth, setAuth] = useState(cookies.get('auth'));

    const handleCerrar = ()=>{
        cookies.remove('token');
        cookies.remove('auth');
        setAuth(false);
    };

    return(
        <nav className="nav">
            <LogoIcon className="icon" width="150px"/>
            <ul>
                <li className="nav-link">
                    <Link to="/">
                        <CasaIcon className="icon" width="20px"/>
                        Inicio
                    </Link>
                </li>
                {!auth 
                ?<>
                <li className="nav-link">
                    <p onClick={()=> onClick('i')}>Iniciar sesión</p>
                </li>
                <li className="nav-link">
                    <p onClick={()=> onClick('r')}>Registrarse</p>
                </li>
                </>
                :<>
                <li className="nav-link">
                    <Link to="/carrito">
                    <CarritoIcon className="icon" width="30px"/>
                        Carrito
                    </Link>
                </li>
                <li className="nav-link">
                    <p onClick={handleCerrar}>Cerrar sesión</p>
                </li>
                </>    
                }
            </ul>
        </nav>
    );
};

export default Nav;