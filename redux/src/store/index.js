import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
// import {configureStore } from '@reduxjs/toolkit'

//Create Store

const store = configureStore({
  reducer: {
    todoReducer1: todoReducer,
  },
});

//export
export const todoSelector = (state) => state.todoReducer1.allTodo;

export default store;
