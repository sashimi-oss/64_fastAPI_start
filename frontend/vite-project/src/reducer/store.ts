import { configureStore } from "@reduxjs/toolkit";
//slice をimportする　import todosReducer from './todosSlice';

export const store = configureStore({
    reducer: {
        //todos: todoReducer,
    }
})