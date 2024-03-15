import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [avtar, setAvtar] = useState("");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then((response) => response.json())
    .then((user) => {
      setUser(user);
      genRanIMG()
    });
  }, []);

  const genRanIMG = () =>{
    let index = Math.floor(Math.random() * 78);
    return index;
    // const imgURL = `https://xsgames.co/randomusers/assets/avatars/male/${num}.jpg`;
    // setAvtar(imgURL);
  }

  return (
    <>
      <div className="main">
      {user.map((item,index) => (
        <div className="innerMain" key={item.id}>
          {/* here this api link bound under 0 to 78 images */}
          <img src={`https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg`} alt="" />
          <div className="name">
            <p>Name : {item.name}</p>
            <p>User ID : {item.id}</p>
            <p>Email : {item.email}</p>
            <p>UserName : {item.username}</p>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}

export default App;
