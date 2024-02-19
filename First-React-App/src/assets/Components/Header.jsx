import React from 'react';
import '../Components/Header.css'


function Myhead() {
  return (
    <>
      <div className="headMain bg-[#2D3250] h-12 w-100">
        <div className="logo font-semibold cursor-pointer">
        <h1 className="text-orange-500 p-2 font-semiboldn text-lg ml-20">R•T Clothing</h1>
        </div>
        <div className="menubar text-white p-2 text-lg content-center">
            <p className='hover:text-slate-400 cursor-pointer'>Category</p>
            <p className='hover:text-slate-400 cursor-pointer'>Collection</p>
            <p className='hover:text-slate-400 cursor-pointer'>Contact</p>
            <p className='hover:text-slate-400 cursor-pointer'>Login</p>
        </div>
      
      </div>
    </>
  );
}
export default Myhead;
