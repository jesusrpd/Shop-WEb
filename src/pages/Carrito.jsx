import React, { useEffect, useState } from 'react';
import Compra from '../components/Compra';
import Cookie from 'universal-cookie';
import axios from 'axios';

const Carrito = ()=>{

    const [compras, setCompras] = useState([]);

    useEffect(()=>{
        const getCompras = async ()=>{
            const cookies = new Cookie();
            const res = await axios.get(`http://localhost:4000/api/compras/${cookies.get('id')}`);
            setCompras(res.data[0].compras);
        };
        getCompras();
    },[]);

    return(
        <div className="carrito">
            <h2 className="carrito-title">Carrito</h2>
            {compras.map(compra =>(
                <Compra key={compra._id} nombre={compra.nombre} precio={compra.precio} img={compra.urlImg} departamento={compra.departamento}/>
            ))}
            <button className="carrito-button btn-primary">Comprar todo $</button>
        </div>
    );
};

export default Carrito;