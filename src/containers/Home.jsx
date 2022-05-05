import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <img className="Home-img" src="https://i.ibb.co/swpKjTq/gtaV-1.png" alt="Logo de GTAVnpm" />
                <div className="Home-information">
                     <p className="Home-information-p">
                        Bienvenid@ a mi sitio web donde la temática principal
                        son los videojuegos. Cuenta con una sección de buscador
                        donde puede hacer su busqueda por el nombre del juego que 
                        desea y se mostrará toda la información disponible.
                    </p> 
                     <Link className="Home-information-link" to="/buscador">Ir al Buscador</Link> 
                </div>
        </div>
    )
}

export {Home};