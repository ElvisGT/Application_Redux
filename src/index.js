import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {Layout} from './containers/Layout';

const root = document.getElementById('root');
const container = ReactDOMClient.createRoot(root);
container.render(<Layout />);