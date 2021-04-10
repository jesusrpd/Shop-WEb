import React from 'react';
import Card from '../components/Card';
import Filtro from '../components/Filtro';

const Inicio = ()=>(
    <>
        <Filtro/>
        <div className="card-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>
);

export default Inicio;