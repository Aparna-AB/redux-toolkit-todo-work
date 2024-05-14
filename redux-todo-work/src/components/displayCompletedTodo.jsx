import { useSelector } from "react-redux";
import { completeTodo } from "../redux/todoReducer/todoReducer";


export const CompletedTodo = () => {
    const completedTodoItem = useSelector((state) => state.todo.completedTodo);  //accessing the single value->todos
   

    return (
        <>
            <div>
                {/* <h1>Todo Items</h1> */}
                {completedTodoItem.map((completeTodo) => {
                    return (
                        <div style={{ display: "flex" }} key={completeTodo.id}>
                            <h5>{completeTodo.id}</h5>
                            <h5>{completeTodo.item}</h5>

                        </div>
                    );
                })}
            </div>
        </>
    );
};