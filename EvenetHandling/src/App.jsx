import { useState } from 'react'
import './App.css'

function App() {

  // const [name,setName] = useState("soyal")
  const [form,setForm] = useState({email: "", phone: ""})
  const handleclick = () =>{
    alert("btn clicked.")
  }
  const handlemouseover = () =>{
    alert("MOUSE OVER IN DIV")
  }
  const handleonchange = (e) =>{
  //  setForm(e.target.value)
   setForm({...form,[e.target.name]: e.target.value})
   console.log(form);
  }

  return (
    <>

     
        <button onClick={handleclick}>
          Click Event
        </button>

        <div className="main" onMouseOver={handlemouseover}>
          <p>hello this is div</p>
        </div>
        by default you cant change the valaue of input you should have to write onchange <br/>
        <input type="text" name='email' value={form.name} onChange={handleonchange}/><br/>
        <input type="text" name='phone' value={form.phone} onChange={handleonchange}/>
      
    </>
  )
}

export default App
