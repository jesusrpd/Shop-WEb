import React from 'react';
import {ReactComponent as LogoIcon} from '../assets/SVG/logo.svg';
import {ReactComponent as CasaIcon} from '../assets/SVG/casa.svg';
import {ReactComponent as CarritoIcon} from '../assets/SVG/carrito.svg';

const Nav = ({onClick})=>(
    <nav className="nav">
        <LogoIcon className="icon" width="150px"/>
        <ul>
            <li className="nav-link">
                <CasaIcon className="icon" width="20px"/>
                <a href="#">Inicio</a>
            </li>
            <li className="nav-link">
                <CarritoIcon className="icon" width="30px"/>
                <a href="#">Carrito</a>
            </li>
            <li className="nav-link">
                <a onClick={()=> onClick(true)} href="#">Iniciar sesión</a>
            </li>
            <li className="nav-link">
                <a onClick={()=> onClick(true)  } href="#">Registrarse</a>
            </li>
        </ul>
    </nav>
);

export default Nav;