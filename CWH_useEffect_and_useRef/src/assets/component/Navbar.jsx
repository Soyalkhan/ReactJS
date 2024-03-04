import React, { useEffect } from "react";
// {color} passing prop from the app.jsx value will come from app.jsx
function Navbar({ color }) {

  //run on every render
  useEffect(() => {
    alert("I will run on every render!");
  });
//run on every first render
  useEffect(() => {
    alert("i will run on every first render only.");
  }, []);

  //run on every color change 
  useEffect(() => {
    alert("I will run on when color changed");
  }, [color]);


  //removing a component/container from the DOM
  useEffect(()=>{
    alert("Hey welcome to my page. This is the first render of app.jsx")
    return ()=>{
      alert("component unmounted.")
    }
  })
  return <div>I am Navbar and my color is {color}</div>;
}

export default Navbar;
