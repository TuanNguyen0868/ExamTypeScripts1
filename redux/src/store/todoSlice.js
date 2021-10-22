import { createSlice, nanoid } from "@reduxjs/toolkit";

//declare  initialState
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodo: [],
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.allTodo.unshift(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    markCompleted(state, action){
      const todoId = action.payload
      state.allTodo = state.allTodo.map(todo =>{
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }
        return todo
      })
    },
    deleteTodo(state, action){
      const todoId = action.payload
      state.allTodo = state.allTodo.filter(todo => todo.id !== todoId)
    },
    editTodo(state, action){
      const todoId = action.payload
      state.allTodo = state.allTodo.map(todo =>{
        if(todo.id = todoId){
          todo.title = todoId.title
        }
        return todo
      })

    }
  },
});

//create Reducer

const todoReducer = todoSlice.reducer;

//Action reducer
export default todoReducer;

//Export action
export const { addTodo, markCompleted, deleteTodo, editTodo } = todoSlice.actions;
