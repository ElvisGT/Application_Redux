import React,{useEffect,useState} from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ShowMenu} from '../actions/actions';

const Header = (props) => {
    const {show_menu} = props;
    const [menuScroll,setMenuScroll] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            const scroll = document.documentElement.scrollTop || document.body.scrollTop;

            if(scroll > 150){
                setMenuScroll(true);
            }else{
                setMenuScroll(false);
            }
        }
    }, [])

    const handleMenu = () => {
        props.ShowMenu();
    }

    return (
        <div className="Header" id="header">
            <h1 className="Header-title">ElvisDev</h1>
            {show_menu
                ? 
                    <div className="Header-menu">
                        <button type="button" 
                                className="Header-menu-closeButton"
                                onClick={handleMenu}>
                                <img />
                        </button>
                        <a href="/">Inicio</a>
                        <a href="/">Buscador</a>
                        <a href="/">Acerca</a>
                    </div>
                :
                    <button type="button" 
                            className="Header-menu-closeButton" 
                            onClick={handleMenu}>
                            <img />
                    </button>
            }

            {menuScroll && 
                <div className="Header-menu-scroll">Menu Scroll</div>
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
    ShowMenu
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);