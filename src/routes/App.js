import React from 'react';
import {HashRouter,Routes,Route} from 'react-router-dom';
import { Layout } from '../containers/Layout';
import {Home} from '../containers/Home';
import {Buscador} from '../containers/Buscador';
import {Acerca} from '../containers/Acerca';

const App = () => {
    return (
        <React.Fragment>
            <HashRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/buscador" element={<Buscador />}/>
                        <Route exact path="/acerca" element={<Acerca />}/>
                    </Routes>
                </Layout>
            </HashRouter>
        </React.Fragment>
    );
};

export {App};