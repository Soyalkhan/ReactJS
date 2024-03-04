import React, { useRef } from "react";

function Catfriends() {
  const list = useRef(null);
  function ScrollToImg(index) {
    const listOfNode = list.current;
    // This line assumes a particular DOM structure:
    const imgNode = listOfNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  return (
    <div>
      <nav className="nav">
        <button onClick={() => ScrollToImg(0)}>To 1st img</button>
        <button onClick={() => ScrollToImg(1)}>To 2nd img</button>
        <button onClick={() => ScrollToImg(2)}>To 3rd img</button>
      </nav>
      <div>
        <ul ref={list}>
          <li>
            <img src="https://placekitten.com/g/200/200" alt="Tom" />
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="Maru" />
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Catfriends;
