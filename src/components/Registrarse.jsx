import React, { useState } from 'react';

const IniciarSesion = ({display, onClick})=>{

    return(
        <div className={display === true ? "form-page open": "form-page"}>
            <p onClick={()=> onClick(false)} className="close">X</p>
            <form className="form">
                <h2 className="form-title">Registrarse</h2>
                <div className="form-campo-container">
                    <div className="form-campo">
                        <img src="" alt=""/>
                        <input placeholder="Nombre de usuario" type="text" name="" id=""/>
                    </div>
                    <div className="form-campo">
                        <img src="" alt=""/>
                        <input placeholder="Email" type="text" name="" id=""/>
                    </div>
                    <div className="form-campo">
                        <img src="" alt=""/>
                        <input placeholder="Contraseña" type="text" name="" id=""/>
                    </div>
                </div>
                <button className="btn-primary form-button">Registrarse</button>
                <a href="" className="form-link">¿Ya tienes una cuenta?</a>
            </form>
        </div>
    );
};

export default IniciarSesion;