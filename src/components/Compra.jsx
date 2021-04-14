import React from 'react';

const Compra = ({nombre, precio, departamento, img, id, onClick, confirm})=>{

    return(
        <div className="carrito-card">
            <img className="carrito-card-img" src={img} alt={nombre}/>
            <div className="carrito-card-info">
                <p>{nombre}</p>
                <p>${precio}Mxn.</p>
                <p>{departamento}</p>
            </div>
            <div>
                <button onClick={()=> onClick(id)} className="carrito-card-button btn-orange">Eliminar</button>
                <button onClick={confirm} className="carrito-card-button btn-primary">Comprar</button>
            </div>
        </div>
    );
};

export default Compra;