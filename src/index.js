import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {App} from './routes/App';

const root = document.getElementById('root');
const container = ReactDOMClient.createRoot(root);
container.render(<App />);