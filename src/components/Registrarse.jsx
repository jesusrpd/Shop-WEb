import React, { useState } from 'react';
import axios from 'axios';
import Cookie from 'universal-cookie';

const IniciarSesion = ({display, onClick})=>{

    const [form, setForm] = useState({name: '', email: '', password: ''});

    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e =>{
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/api/auth/signup', form);
        const cookies = new Cookie();
        cookies.set('token', res.data.token, {path:'/'});
        cookies.set('auth', res.data.auth, {path:'/'});
        cookies.set('id', res.data.id, {path:'/'});
        window.location.reload(true);
    };

    return(
        <div className={display === true ? "form-page open": "form-page"}>
            <p onClick={()=> onClick('r')} className="close">X</p>
            <form onSubmit={handleSubmit} className="form">
                <h2 className="form-title">Registrarse</h2>
                <div className="form-campo-container">
                    <div className="form-campo">
                        <img src="" alt=""/>
                        <input onChange={handleChange} placeholder="Nombre de usuario" type="text" name="name" value={form.name}/>
                    </div>
                    <div className="form-campo">
                        <img src="" alt=""/>
                        <input onChange={handleChange} placeholder="Email" type="email" name="email" value={form.email}/>
                    </div>
                    <div className="form-campo">
                        <img src="" alt=""/>
                        <input onChange={handleChange} placeholder="Contraseña" type="password" name="password" value={form.password}/>
                    </div>
                </div>
                <button type="submit" className="btn-primary form-button">Registrarse</button>
                <p onClick={()=>{onClick('i'); onClick('r')}} className="form-link">¿Ya tienes una cuenta?</p>
            </form>
        </div>
    );
};

export default IniciarSesion;