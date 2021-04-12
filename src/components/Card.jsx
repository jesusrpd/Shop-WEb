import React from 'react';
import Cookie from 'universal-cookie';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Card = ({onClick, nombre, precio, departamento, img, id})=>{

    let history = useHistory();
    const handleClick = async i =>{
        const cookies = new Cookie();
        if (cookies.get('auth')) {
            
            await axios.post('http://localhost:4000/api/compras', {idUser: cookies.get('id'), idCom: i});
            console.log(i);
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
            <button onClick={()=> handleClick(id)} className="card-button btn-primary">Comprar</button>
        </div>
    );
};

export default Card;