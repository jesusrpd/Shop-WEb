import React from 'react';
import Select from 'react-select';

const Filtro = ()=>{

    const options = [
        {value: 'tecnología', label: 'Tecnología'},
        {value: 'carros', label: 'Carros'},
        {value: 'ropa', label: 'Ropa'}
    ];

    return(
        <Select options={options}/>
    );
};

export default Filtro;