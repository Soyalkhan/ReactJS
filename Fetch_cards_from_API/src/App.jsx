import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./assets/Components/Navbar";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
     
      .then((data) => setUser(data));
      let LoadCom = true;
      
  }, []);

  return (
    <>  <Navbar/>
      <div className="container">
        {users.map((user) => (
          <div className="main">
            <h1 className="id">
              <span className="sp">ID :</span> {user.id}
            </h1>
            <hr />
            <h1 className="userid">
              <span className="sp">User ID : </span>
              {user.userId}
            </h1>
            <hr />
            <h2 className="title">
              <span className="sp"> Title : </span>
              {user.title}
            </h2>
            <hr />
            <p className="body">
              <span className="sp"> Message Body : </span>
              {user.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
