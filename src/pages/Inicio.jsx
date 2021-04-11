import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Filtro from '../components/Filtro';
import axios from 'axios';

const Inicio = ({onClick})=>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async ()=>{
            const res = await axios.get('http://localhost:4000/api/products/todo');
            setProducts(res.data);
        }
        getProducts();
    }, [])

    return(
        <>
            <Filtro/>
            <div className="card-container">
                {
                    products.map(product =>(
                        <Card key={product._id} nombre={product.nombre} departamento={product.departamento} img={product.urlImg} precio={product.precio} onClick={onClick}/>
                    ))
                }
            </div>
        </>
    );
};

export default Inicio;