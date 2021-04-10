import React from 'react';

const IniciarSesion = ({display, onClick})=>(
    <div className={display === true ? "form-page open": "form-page"}>
        <p onClick={()=> onClick('i')} className="close">X</p>
        <form className="form">
            <h2 className="form-title">Iniciar Sesión</h2>
            <div className="form-campo-container">
                <div className="form-campo">
                    <img src="" alt=""/>
                    <input placeholder="Nombre o email" type="text" name="" id=""/>
                </div>
                <div className="form-campo">
                    <img src="" alt=""/>
                    <input placeholder="Contraseña" type="text" name="" id=""/>
                </div>
            </div>
            <button className="btn-primary form-button">Iniciar sesión</button>
            <a href="" className="form-link">¿No tienes una cuentas?</a>
        </form>
    </div>
);

export default IniciarSesion;