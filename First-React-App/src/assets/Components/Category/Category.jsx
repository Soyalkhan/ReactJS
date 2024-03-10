import React from 'react'
import men from '../images/men.jpeg'
import women from '../images/womens.jpeg'

function Category() {
  return (
    <>
    <div className='flex justify-center gap-4	 p-10 bg-gradient-to-t from-gray-800 via-gray-900/20"'>
      <h1 className=' mt-3 text-8xl font-bold text-red-700 rotate-90 cursor-pointer '>Men's</h1>
      <img className='w-1/4	object-cover cursor-pointer' src={men} alt="mens"/>
      <h1 className=' mt-3 text-7xl font-bold text-red-700 rotate-90 cursor-pointer'>Women's</h1>
      <img className='w-1/4	object-cover cursor-pointer' src={women} alt="womens" />
    </div>
    </>
  )
}

export default Category