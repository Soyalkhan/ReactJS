import React from 'react'
import bannerImg from '../images/bn-img.png'

function Myhead() {
    return (
      <>
       <div className="MainBanner w-full grid grid-cols-1 sm:grid-cols-2">
    <div className="innerbanner1 p-10">
        <h1 className='font-arial font-extrabold text-4xl text-red-700'>
            <span className="inline-block py-2">GET 100% ASSURED GROW WITH TECH DELTA</span>
        </h1>
        <p className='text-red-800 font-sans'>Edge to edge support will be provided 100% Moneyback Guarantee.</p>
        
        
        <h1 className='font-arial font-extrabold text-4xl text-red-700'>
            <span className="inline-block py-2">Yes it's achiveable !</span>
        </h1>
     
        <button className='bg-blue-600 text-white rounded-md p-2 mt-4 hover:bg-sky-700'>Enroll Now!</button>
    </div>
    <div className="div2 justify-self-end">
        <img className='max-w-full h-auto' src={bannerImg} alt="img" />
    </div>
</div>

      </>
    );
  } 
  export default Myhead;