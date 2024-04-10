import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'
// const nums = new Array(20_000_000).fill(0).map((_,i)=>{
//   return{
//     index:i,
//     isMagical: i === 15_000_000
//   }
// })
function App() {
  const [count, setCount] = useState(0)
  // const [numbers, setNumbers] = useState(nums)
// to tacle this we will use useMemo
 // const magical = numbers.find(item=>item.isMagical===true)// expensive computation // it will take lots of time to excute cause nums is very large number
//  const magical =  useMemo(() => numbers.find(item=>item.isMagical===true), [])
  return (
    <>
  
      {/* <h1>magical no is :{magical.index} </h1> */}
      <button >Count {count}</button>
    </>
  )
}

export default App
