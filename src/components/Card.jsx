import React from 'react';
import Cookie from 'universal-cookie';
import {useHistory} from 'react-router-dom';

const Card = ({onClick, nombre, precio, departamento, img})=>{

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
            <img className="card-img" src={img} alt=""/>
            <div className="card-info">
                <p>{nombre}</p>
                <p>{precio}</p>
                <p>{departamento}</p>
            </div>  
            <button onClick={handleClick} className="card-button btn-primary">Comprar</button>
        </div>
    );
};

export default Card;