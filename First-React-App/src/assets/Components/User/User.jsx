import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const {userid} = useParams()
  return (
    <>
    <h3 className='bg-red-200 text-red-900 text-2xl text-center p-5'>Getting data from or id from link we also fetch product id or cart id here.</h3>
    <div className='bg-gray-700 text-white text-center text-3xl p-5'>User : {userid}</div>
    </>
    
  )
}

export default User