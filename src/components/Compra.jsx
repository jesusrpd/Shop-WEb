import React from 'react';
import carroImg from '../assets/img/carro1.jpg';

const Compra = ()=>(
    <div className="carrito-card">
        <img className="carrito-card-img" src={carroImg} alt=""/>
        <div className="carrito-card-info">
            <p>Modelo</p>
            <p>Precio</p>
            <p>Departamento</p>
        </div>
        <div className="carrito-button">
            <button className="carrito-card-button btn-orange">Eliminar</button>
            <button className="carrito-card-button btn-primary">Comprar</button>
        </div>
    </div>
);

export default Compra;