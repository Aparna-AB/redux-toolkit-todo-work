import "./App.css";
import { AddTodo } from "./components/addTodo";
import { DisplayTodo } from "./components/displayTodo";
import { CompletedTodo } from "./components/displayCompletedTodo";

function App() {

  return (
    <>
    <div>
    <h1> Hello </h1>
      <AddTodo />
      <DisplayTodo />
    </div>
<br/>
    <div>
      <h1>Completed Todos</h1>
      <CompletedTodo />
    </div>

     
    </>
  );
}

export default App;