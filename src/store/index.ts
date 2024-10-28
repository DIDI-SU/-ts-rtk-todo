import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/todo";

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});



export type RootState = ReturnType<typeof todoReducer>
export default store;

