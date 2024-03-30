import React from 'react'
import m1 from "../images/m1.jpg"
import m2 from "../images/m2.jpg"
import m3 from "../images/m3.jpg"
import m4 from "../images/m4.jpg"
import w1 from "../images/w1.jpg"
import w2 from "../images/w2.jpg"
import w3 from "../images/w3.jpg"
import w4 from "../images/w4.jpg"

function Collection() {
  return (
    <>
    <h1 className=' text-6xl text-center p-10 font-extralight text-red-900'>Shop your collection</h1>
    <div className="main-collection p-10">
      <div className="mens flex gap-10 justify-center">
        <div className="cat-1 w-48">
          <img src={m1} alt="" />
          <p className='text-center text-blue-700 font-bold uppercase'>jhgfd</p>
        </div>
        <div className="cat-2 w-48">
        <img src={m2} alt="" />
        </div>
        <div className="cat-3 w-48">
        <img src={m3} alt="" />
        </div>
        <div className="cat-4 w-48">
        <img src={m4} alt="" />
        </div>
      </div>
      <div className="womens flex gap-10 justify-center p-10">
      <div className="cat-1 w-48">
        <img src={w1} alt="" />
      </div>
        <div className="cat-2 w-48">
          <img src={w2} alt="" />
        </div>
        <div className="cat-3 w-48">
          <img src={w3} alt="" />
        </div>
        <div className="cat-4 w-48">
          <img src={w4} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Collection