import React, {useState} from 'react';
import Cookie from 'universal-cookie';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Load from './Load';

const Card = ({onClick, nombre, precio, departamento, img, id})=>{

    let history = useHistory();
    const [load, setLoad] = useState(false);

    const handleClick = async i =>{
        const cookies = new Cookie();
        if (cookies.get('auth')) {
            setLoad(true);
            await axios.post('/api/compras', {idUser: cookies.get('id'), idCom: i});
            setLoad(false);
            history.push('/carrito');
        }else{
            onClick('i');
        }
    }

    if (load) {
        return <Load/>
    }
    return(
        <div className="card">
            <img className="card-img" src={img} alt=""/>
            <div className="card-info">
                <p>{nombre}</p>
                <p>${precio}Mxn.</p>
                <p>{departamento}</p>
            </div>  
            <button onClick={()=> handleClick(id)} className="card-button btn-primary">Comprar</button>
        </div>
    );
};

export default Card;