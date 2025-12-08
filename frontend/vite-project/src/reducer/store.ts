import { configureStore } from "@reduxjs/toolkit";
//slice をimportする　import todosReducer from './todosSlice';
import tweetsReducer from "./slicer/tweets-slice";


export const store = configureStore({
    reducer: {
        //todos: todoReducer,
        tweets: tweetsReducer,
    },
})

type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const tweetsSelector = (state: RootState) => state.tweets;