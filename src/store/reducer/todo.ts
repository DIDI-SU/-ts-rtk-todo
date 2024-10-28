
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoItem } from "../../types/todolist";

interface TodoState {
    todoList: TodoItem[];
}


const initialState: TodoState = {
    todoList: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
        reducers: {
            add: (state,action:PayloadAction<TodoItem>) => { state.todoList.push(action.payload) }, 
            delete: (state, action:PayloadAction<number|string>) => { state.todoList = state.todoList.filter(item => item.id !== action.payload) },
            update: (state, action:PayloadAction<TodoItem>) => { state.todoList = state.todoList.map(item => item.id === action.payload.id ? action.payload : item) },
            toggle: (state, action:PayloadAction<TodoItem>) => { state.todoList = state.todoList.map(item => item.id === action.payload.id ? { ...item, completed: action.payload.completed } : item) },
    }
});

export const { add, delete:deleteTodo, update:updateTodo, toggle:toggleTodo  } = todoSlice.actions;
export default todoSlice.reducer;

