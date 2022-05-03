import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ShowMenu,HideMenu} from '../actions/actions';

const Header = (props) => {
    const {show_menu} = props;
    const [menuScroll,setMenuScroll] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            const scroll = document.documentElement.scrollTop || document.body.scrollTop;

            if(scroll > 200){
                setMenuScroll(true);
                props.HideMenu();


            }else{
                setMenuScroll(false);

            }
        }
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
        show_menu:state.show_menu
    }
}

const mapDispatchToProps = {
    ShowMenu,
    HideMenu
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);