import React from 'react';

const Filtro = ({onChange, value})=>{

    return(
        <select className="select" value={value} onChange={onChange}>
            <option value="todo">Todo</option>
            <option value="carros">Carros</option>
            <option value="tecnologia">Tecnología</option>
            <option value="ropa">Ropa</option>
        </select>
    );
};

export default Filtro;