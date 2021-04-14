import React, {useState} from 'react';
import Nav from './components/Nav';
import IniciarSesion from './components/IniciarSesion';
import Registrarse from './components/Registrarse';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Carrito from './pages/Carrito';
import Footer from './components/Footer';

const App = ()=>{

    const [displayIniciar, setDisplayIniciar] = useState(false);
    const [displayRegistrar, setDisplayRegistrar] = useState(false);

    const handleDisplay = d =>{
        if (d === 'i') {
            setDisplayIniciar(!displayIniciar);
        }else{
            setDisplayRegistrar(!displayRegistrar);
        }
    }

    return(
        <Router>
            <IniciarSesion display={displayIniciar} onClick={handleDisplay}/>
            <Registrarse display={displayRegistrar} onClick={handleDisplay}/>
            <div className="page">
                <Nav onClick={handleDisplay}/>
                <Route exact path="/" render={ props => <Inicio {...props} onClick={handleDisplay}/>}/>
                <Route path="/carrito" component={Carrito}/>
            </div>
            <Footer/>
        </Router>
    );
};

export default App;