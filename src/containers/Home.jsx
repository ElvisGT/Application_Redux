import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <img src="" alt="" />
                <div>
                     <p>
                        Bienvenid@ a mi sitio web donde la temática principal
                        son los videojuegos. Cuenta con una sección de buscador
                        donde puede hacer su busqueda por el nombre del juego que 
                        desea y se mostrará toda la información 
                         
                         
                    </p> 
                     <Link to="/buscador">Ir al Buscador</Link> 
                </div>
        </div>
    )
}

export {Home};