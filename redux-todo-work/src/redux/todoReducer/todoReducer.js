import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    completedTodo: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let newItem = {
                id: state.todos.length + 1,
                item: action.payload,
                status: "pending",
            };
            state.todos = [...state.todos, newItem];
        },
        deleteTodo: (state, action) => {
            console.log("delete", action.payload);
            const itemId = action.payload;
            const newTodos = state.todos.filter((todo) => todo.id != itemId);
            console.log("deleting with id", newTodos);
            state.todos = [...newTodos];
        },

        completeTodo: (state, action) => {
            const completeItem = action.payload;
            //    console.log("completed todo",completeItem);
            state.completedTodo = [...state.completedTodo, completeItem];

            const todosAfterDelete = state.todos.filter((todo) => todo.id != completeItem.id);
            state.todos = [...todosAfterDelete];
        },
    },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
