import React, { useState } from 'react';
import axios from 'axios';
import Cookie from 'universal-cookie';

const IniciarSesion = ({display, onClick})=>{

    const [form, setForm] = useState({email:'', password:''});

    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e =>{
        e.preventDefault();
        const res = await axios.post('/api/auth/login', form);
        const cookies = new Cookie();
        cookies.set('token', res.data.token, {path: '/'});
        cookies.set('auth', res.data.auth, {path: '/'});
        cookies.set('id', res.data.id, {path: '/'});
        window.location.reload(true);
    };

    return(
        <div className={display === true ? "form-page open": "form-page"}>
            <p onClick={()=> onClick('i')} className="close">X</p>
            <form onSubmit={handleSubmit} className="form">
                <h2 className="form-title">Iniciar Sesión</h2>
                <div className="form-campo-container">
                    <div className="form-campo">
                        <img src="" alt=""/>
                        <input onChange={handleChange} placeholder="Nombre o email" type="text" name="email" value={form.email}/>
                    </div>
                    <div className="form-campo">
                        <img src="" alt=""/>
                        <input onChange={handleChange} placeholder="Contraseña" type="password" name="password" value={form.password}/>
                    </div>
                </div>
                <button type="submit" className="btn-primary form-button">Iniciar sesión</button>
                <p onClick={()=>{onClick('r'); onClick('i')}} className="form-link">¿No tienes una cuentas?</p>
            </form>
        </div>
    );
};

export default IniciarSesion;