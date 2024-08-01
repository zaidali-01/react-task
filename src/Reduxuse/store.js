import listReducer from "./reducer.js";
import {configureStore} from '@reduxjs/toolkit';

const store=configureStore({
    reducer:
    {
        lists:listReducer
    }
});

export default store;