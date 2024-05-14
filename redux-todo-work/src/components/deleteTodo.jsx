// import { useDispatch } from "react-redux";
// import { deleteTodo } from "../redux/todoReducer/todoReducer";
// import { useState } from "react";

// export const DeletedTodo = () => {
//     const dispatch = useDispatch();
//     const [deleteItem,setDeleteItem]=useState("");

//     const deleteTodoItem=(id)=>{
//         dispatch(deleteTodo(deleteItem));
//         setDeleteItem(id);
//     }

//     return (
//         <>
//             <div>
//                 <button
//                     value={deleteItem}
//                     onClick={deleteTodoItem}>
//                     Deleted
//                 </button>

//             </div>
//         </>
//     );

// };