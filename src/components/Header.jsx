import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ShowMenu,HideMenu,ShowDesktop} from '../actions/actions';

const Header = (props) => {
    const {show_menu,show_desktop} = props;
    const [menuScroll,setMenuScroll] = useState(false);
    
    if(window.screen.width >= 768){
        props.ShowDesktop();
    }
   

    useEffect(() => {

        //Esto es para escuchar tdo el tiempo el scroll
        window.onscroll = () => {
            const scroll = document.documentElement.scrollTop || document.body.scrollTop;

            if(scroll > 200){
                setMenuScroll(true);
                props.HideMenu();


            }else{
                setMenuScroll(false);

            }
        };

            //Esto es para escuchar todo el tiempo si se cambia de resolucion
            window.onresize = () => {
                const screenSize = window.screen.width;

                if(screenSize >= 768){
                    props.ShowDesktop();
                }else if(screenSize < 768){
                    props.HideDesktop();
                }
                
               
            };

    }, [])

    const handleShowMenu = () => {
        props.ShowMenu();
    }

    const handleHideMenu = () => {
        props.HideMenu();
    }

    const handleClear = () => {
        document.documentElement.scrollTop = 0;
        props.HideMenu();

    }

    return (
        <div className="Header" id="header">
            <h1 className="Header-title">ElvisDev</h1>
            {/*Esto es para mostrar el menu o el icono del menu*/}
            {show_menu 
                ?
                    <div className="Header-menu">
                        <span 
                                onClick={handleHideMenu}>
                                <img className="Header-menu-closeButton-img" src="https://i.ibb.co/Y8P59Ch/icons8-eliminar-32.png" alt="boton de cerrar"/>
                        </span>
                        <Link onClick={handleClear} className="menu-link" to="/">Inicio</Link>
                        <Link onClick={handleClear} className="menu-link" to="/buscador">Buscador</Link>
                        <Link onClick={handleClear} className="menu-link" to="/acerca">Acerca</Link>
                 
                    </div>
                :
                    <span   
                        onClick={handleShowMenu}>
                        <img className="Header-menu-img" src="https://i.ibb.co/jwSRwmM/icons8-men-32.png" alt="icono de menu"/>
                    </span>
            }
            {/*Esto es para mostrar el menu en modo desktop*/}
            {show_desktop &&
                <div className="Menu_Desktop">
                    <Link onClick={handleClear} className="menu-link" to="/">Inicio</Link>
                    <Link onClick={handleClear} className="menu-link" to="/buscador">Buscador</Link>
                    <Link onClick={handleClear} className="menu-link" to="/acerca">Acerca</Link>
                 
                </div>
                
            }

            {/*Esto es para mostrar el menu al hacer scroll*/}
            {menuScroll && 
                <div className="Header-menu-scroll">
                        <Link onClick={handleClear} className="menu-link" to="/">Inicio</Link>
                        <Link onClick={handleClear} className="menu-link" to="/buscador">Buscador</Link>
                        <Link onClick={handleClear} className="menu-link" to="/acerca">Acerca</Link>
                </div>
            }

           
        </div>
    )
}

const mapStateToProps = state => {
    return {
        show_menu:state.show_menu,
        show_desktop:state.show_desktop,
    }
}

const mapDispatchToProps = {
    ShowMenu,
    HideMenu,
    ShowDesktop,
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);