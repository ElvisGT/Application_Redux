import React from 'react';

const Acerca = () => {
    return (
        <div className="Acerca">
            <div className="Acerca-container">
                <h1 className="Acerca-title">Sobre mí</h1>
                <p className="Acerca-p">
                    Este proyecto lo he realizado con la tecnología React Js y para el flujo de la información utilicé Redux. Es ideal para aquellos que gusten de este mundo
                    de los videojuegos. Estará en constante mejoría en cuanto a calidad y rapidez del sitio.      
                </p>
            </div>
            <div className="Acerca-container">
                <h2 className="Acerca-title">Acuerdo de licencia</h2>
                <p className="Acerca-p">
                    Este proyecto es de uso gratuito, tantos las imágenes como recursos utilizados para la realización del mismo son de páginas gratuitas. Su finalidad no es comercial, es para el entretenimiento e información de los usuarios que deseen 
                    utilizar el sitio web. 
                </p>
            </div>
            <div className="Acerca-container">
                <h2 className="Acerca-title">Agradecimientos</h2>
                <p className="Acerca-p">
                    Algunas de las imágenes utilizadas son del sitio <a href="https://www.pexels.com/es-es/" className="Acerca-vinculo">Pexels</a> y la información y capturas de los videojuegos son obtenidas 
                    directamente de la API pública del sitio <a href="https://api.rawg.io/docs/" className="Acerca-vinculo">RAWG</a>. Para los íconos me apoyé del sitio <a href="https://iconos8.es/" className="Acerca-vinculo">Icons8</a>.
                </p>
            </div>
            <h2 className="Thanks">Gracias por su visita</h2>
        </div>
    );
}


export {Acerca};