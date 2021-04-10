import React from 'react';
import {ReactComponent as LogoIcon} from '../assets/SVG/logo.svg';
import {ReactComponent as CasaIcon} from '../assets/SVG/casa.svg';
import {ReactComponent as CarritoIcon} from '../assets/SVG/carrito.svg';
import {Link} from 'react-router-dom';

const Nav = ({onClick})=>(
    <nav className="nav">
        <LogoIcon className="icon" width="150px"/>
        <ul>
            <li className="nav-link">
                <Link to="/">
                    <CasaIcon className="icon" width="20px"/>
                    Inicio
                </Link>
            </li>
            <li className="nav-link">
                <Link to="/carrito">
                <CarritoIcon className="icon" width="30px"/>
                    Carrito
                </Link>
            </li>
            <li className="nav-link">
                <Link onClick={()=> onClick('i')} href="#">Iniciar sesión</Link>
            </li>
            <li className="nav-link">
                <Link onClick={()=> onClick('r')} href="#">Registrarse</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;