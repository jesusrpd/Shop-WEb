import React from 'react';
import Select from 'react-select';

const Filtro = ()=>{

    const options = [
        {value: 'todo', label: 'Todo'},
        {value: 'tecnología', label: 'Tecnología'},
        {value: 'carros', label: 'Carros'},
        {value: 'ropa', label: 'Ropa'}
    ];

    return(
        <Select className="select" placeholder="Todo" options={options}/>
    );
};

export default Filtro;