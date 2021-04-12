import React from 'react';
import carroImg from '../assets/img/carro1.jpg';

const Compra = ({nombre, precio, departamento, img})=>(
    <div className="carrito-card">
        <img className="carrito-card-img" src={img} alt={nombre}/>
        <div className="carrito-card-info">
            <p>{nombre}</p>
            <p>{precio}</p>
            <p>{departamento}</p>
        </div>
        <div>
            <button className="carrito-card-button btn-orange">Eliminar</button>
            <button className="carrito-card-button btn-primary">Comprar</button>
        </div>
    </div>
);

export default Compra;