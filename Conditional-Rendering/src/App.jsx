import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [showBtn, setShowBtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      Name: "Soyal",
      Address: "New Delhi",
      Phone:7535964612,
    },
    {
      Name: "shahrukh",
      Address: "New Delhi",
      Phone:123456789,
    },
    {
      Name: "mohit",
      Address: "noida",
      Phone:9876378934,
    },
    {
      Name: "Rahul",
      Address: "New York",
      Phone:51767378398,
    }
  ]);


  const Todo = ({todo}) =>{
  return(<>
  
  <div className="main">
      <div className="todo">{todo.Name}</div>
      <div className="todo">{todo.Phone}</div>
      <div className="todo">{todo.Address}</div>
    </div>
  </>)
   
  }
  return (
    <>
      //this is use for if and else condition{" "}
      {showBtn ? <button>This is conditional button</button> : "not true"}{" "}
      <br />
      <br />
      //this only for if condition{" "}
      {showBtn && <button>this is another method only for if condition</button>}
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          Toggle btn{showBtn}
        </button>{" "}
        <br />
        <br />
        {showBtn ? (
          <button>show btn true</button>
        ) : (
          <button>show btn false</button>
        )}
      </div>
      {todos.map(todo=>{
   return <Todo key={todo.Name} todo={todo}/>
    })}
    </>
  );
}

export default App;
