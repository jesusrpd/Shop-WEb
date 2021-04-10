import React, {useState} from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import Filtro from './components/Filtro';
import IniciarSesion from './components/IniciarSesion';
import Registrarse from './components/Registrarse';

const App = ()=>{

    const [display, setDisplay] = useState(false);

    const handleClick = d=>{
        setDisplay(d);
    }

    return(
        <>
            <IniciarSesion display={display} onClick={handleClick}/>
            <Registrarse display={display} onClick={handleClick}/>
            <div className="page">
                <Nav onClick={handleClick}/>
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
        </>
    );
};

export default App;