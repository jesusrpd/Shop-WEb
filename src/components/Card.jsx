import React from 'react';
import CarroImg from '../assets/img/carro1.jpg';
import Cookie from 'universal-cookie';
import {useHistory} from 'react-router-dom';

const Card = ({onClick})=>{

    let history = useHistory();
    const handleClick = ()=>{
        const cookies = new Cookie();
        if (cookies.get('auth')) {
            history.push('/carrito');
        }else{
            onClick('i');
        }
    }

    return(
        <div className="card">
            <img className="card-img" src={CarroImg} alt=""/>
            <div className="card-info">
                <p>Modelo</p>
                <p>Precio</p>
                <p>Departamento</p>
            </div>  
            <button onClick={handleClick} className="card-button btn-primary">Comprar</button>
        </div>
    );
};

export default Card;