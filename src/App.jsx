import React from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import Filtro from './components/Filtro';

const App = ()=>(
    <div className="page">
        <Nav/>
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
    </div>
);

export default App;