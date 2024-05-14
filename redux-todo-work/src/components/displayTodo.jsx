import { useSelector, useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/todoReducer/todoReducer";


export const DisplayTodo = () => {
    const todos = useSelector((state) => state.todo.todos);  //accessing the single value->todos
    const dispatch = useDispatch();

    function handleDeleteTodo(id) {
        dispatch(deleteTodo(id));
    };

    function handleCompleteTodo(todo) {
        dispatch(completeTodo(todo));
    };

    return (
        <>
            <div>
                <h1>Todo Items</h1>
                {todos.map((todo) => {
                    return (
                        <div style={{ display: "flex" }} key={todo.id}>
                            <h5>{todo.id}</h5>
                            <h5>{todo.item}</h5>

                            <button style={{ marginLeft: "10px" }}
                                onClick={() => {
                                    handleDeleteTodo(todo.id)
                                }}>
                                Delete
                            </button>

                            <button style={{ marginLeft: "10px" }} 
                            onClick={()=>{
                                handleCompleteTodo(todo)
                            }}>Completed</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};