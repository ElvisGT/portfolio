import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';



const root = document.getElementById("root");
const container = ReactDOMClient.createRoot(root);
container.render(<App />);