import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoReducer/todoReducer';


const store = configureStore({
    reducer: {
       todo: todoReducer
    }
});

export default store;