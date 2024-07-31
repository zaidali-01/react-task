import listreducer from "./reducer.js";
import {configureStore} from '@reduxjs/toolkit';

const store=configureStore({
    reducer:listreducer
});

export default store;