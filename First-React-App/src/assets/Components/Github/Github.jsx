import React, { useEffect, useState } from 'react'

function Github() {
const [data,setData] = useState([])

        useEffect(()=>{
            fetch('https://api.github.com/users/soyalkhan')
            .then(response => response.json())
            .then(data =>{
                // console.log(data);
                setData(data)
            })
        })
    
  return (
    <>
    <div className='bg-blue-200 text-blue-700 text-center text-2xl p-5 justify-center'>
       <h1>Soyal Khan GitHub Followers : {data.followers}</h1> 
       <h1>Bio : {data.bio}</h1> 
       <h1>Repo's : {data.public_repos}</h1> 
       <img className='rounded-full p-5 justify-center' src={data.avatar_url} alt="" />
    </div>
    </>
  )
}

export default Github