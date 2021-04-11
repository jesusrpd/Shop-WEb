import React from 'react';
import Card from '../components/Card';
import Filtro from '../components/Filtro';

const Inicio = ({onClick})=>(
    <>
        <Filtro/>
        <div className="card-container">
            <Card onClick={onClick}/>
            <Card onClick={onClick}/>
            <Card onClick={onClick}/>
            <Card onClick={onClick}/>
            <Card onClick={onClick}/>
            <Card onClick={onClick}/>
            <Card onClick={onClick}/>
            <Card onClick={onClick}/>
            <Card onClick={onClick}/>
            <Card onClick={onClick}/>
        </div>
    </>
);

export default Inicio;