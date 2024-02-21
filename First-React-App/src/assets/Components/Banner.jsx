import React from 'react'
import bannerImg from '../images/bn-img.png'

function Myhead() {
    return (
      <>
        <div className="MainBanner w-100 grid grid-cols-2 fl" >
            <div className="innerbanner1  p-20">
            <h1 className='font-extrabold text-4xl text-red-700'>
                GET 100% ASSURED GROW WITH TECH DELTA
            </h1>
            <p className='text-red-800'>Edge to edge support will be provided 100% Moenyback Guarantee
                 .</p>
                 <button className='bg-blue-600 text-white rounded-md p-2 mt-4'>Enroll Now!</button>
            </div>
            <div className="innerbanner2 ml-40">
                <img className='' src={bannerImg} alt="img" />
            </div>
        
        </div>
      </>
    );
  } 
  export default Myhead;