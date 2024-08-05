import React from 'react';
import ReactDOM from 'react-dom/client';
import Display from './rtk query/Display.js';
import { Provider } from 'react-redux';
import store from './rtk query/storequery.js';
import App from './App.js'


const id= document.getElementById('root');
const myroot = ReactDOM.createRoot(id);
myroot.render(<App />);