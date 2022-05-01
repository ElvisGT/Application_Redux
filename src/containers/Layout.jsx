import React from 'react';
import {Footer} from '../components/Footer';
import Header from '../components/Header';
import {useInitialState} from '../hooks/useInitialState';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from '../reducer/reducer';
import '../static/css/styles.css';



const Layout = ({children}) => {
    const date = useInitialState([]);
    const initialState = {
        "game":date,
        "show_menu":false
    }

    const store = createStore(reducer,initialState)
   
    return(
        <Provider store={store}>
            <Header />
            {children}
            <Footer />
        </Provider>
    )
}


export {Layout};