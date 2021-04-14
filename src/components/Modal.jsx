import React, { useEffect } from 'react';

const Modal = ({display, onClick})=>{

    useEffect(()=>{
    });

    return(
        <div className={display ? 'modal-container open': 'cerrar'}>
            <div className="modal">
                <p onClick={onClick} className="modal-close">X</p>
                <h3>Felicidades por su compra</h3>
                <p>Esta página es solo un pequeño trabajo de practica así que todas compras echas aquí, no seran reales.</p>
                <p></p>
            </div>
        </div>
    );
};

export default Modal;