import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [Userdata, setUserdata] = useState(null)

  useEffect(()=>{
    const id = 1;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data=>{
      setUserdata(data)  
    })
    .catch(error => {
      console.error('Error fetching :', error);
    })
  },[]);
  useEffect(() => {
    console.log("Fetching...");

    if (Userdata) {
      console.log(Userdata.id);
      document.querySelector('.id').innerText = Userdata.id;
      console.log(Userdata.userId);
      document.querySelector('.userid').innerText = Userdata.userId;

      console.log(Userdata.title);
      document.querySelector('.title').innerText = Userdata.title;

      console.log(Userdata.body);
      document.querySelector('.body').innerText = Userdata.body;

    }
  }, [Userdata]);

  return (
    <>
    <div className='main'>
    <h1 className='id'>id</h1>
    <hr/>
    <h1 className='userid'>userid</h1>
    <hr/>
    <h2 className='title'>Title</h2>
    <hr/>
    <p className='body'>body</p>

    </div>
    </>
  )
}

export default App
