import React from 'react';
import CarroImg from '../assets/img/carro1.jpg';

const Card = ()=>(
    <div className="card">
        <img className="card-img" src={CarroImg} alt=""/>
        <div className="card-info">
            <p>Modelo</p>
            <p>Precio</p>
            <p>Departamento</p>
        </div>  
        <button className="card-button btn-primary">Comprar</button>
    </div>
);

export default Card;