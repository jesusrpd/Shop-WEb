import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Filtro from '../components/Filtro';
import axios from 'axios';
import Load from '../components/Load';

const Inicio = ({onClick})=>{

    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
    const [filtro, setFiltro] = useState('todo');

    const handleChange = e =>{
        setFiltro(e.target.value);
    };

    useEffect(()=>{
        const getProducts = async ()=>{
            const res = await axios.get(`http://localhost:4000/api/products/${filtro}`);
            setProducts(res.data);
            setLoad(false);
        };
        getProducts();
    }, [filtro]);

    if (load) {
        return <Load/>
    }
    return(
        <>
            <Filtro vlue={filtro} onChange={handleChange}/>
            <div className="card-container">
                {
                    products.map(product =>(
                        <Card 
                            key={product._id} 
                            id={product._id}
                            nombre={product.nombre} 
                            departamento={product.departamento} 
                            img={product.urlImg} 
                            precio={product.precio} 
                            onClick={onClick}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Inicio;