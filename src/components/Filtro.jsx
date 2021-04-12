import React from 'react';
import Select from 'react-select';
import { handleInputChange } from 'react-select/src/utils';

const Filtro = ()=>{

    const options = [
        {value: 'todo', label: 'Todo'},
        {value: 'tecnología', label: 'Tecnología'},
        {value: 'carros', label: 'Carros'},
        {value: 'ropa', label: 'Ropa'}
    ];

    

    return(
        <Select className="select" defaultValue={options[0]} options={options}/>
    );
};

export default Filtro;