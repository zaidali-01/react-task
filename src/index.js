import React from 'react';
import ReactDOM from 'react-dom/client';
import Display from './rtk query/Display.js';
import { Provider } from 'react-redux';
import store from './rtk query/storequery.js';
import { BrowserRouter } from 'react-router-dom';

const id = document.getElementById('root');
const myroot = ReactDOM.createRoot(id);
myroot.render(<Provider store={store}>        <BrowserRouter>
    <Display /></BrowserRouter></Provider>);
    