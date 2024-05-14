import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/todoReducer/todoReducer";

export const AddTodo = () => {
    const [item, setItem] = useState("");
   const dispatch = useDispatch();

    const addItem = () => {
        dispatch(addTodo(item));
        setItem("");
    };

    return (
        <>
            <div>
                <input
                    placeholder="enter item"
                    onChange={(e) => {
                        setItem(e.target.value);
                    }}
                    value={item} />

                    <button onClick={addItem}>Add Item</button>
            </div>
        </>
    );

};