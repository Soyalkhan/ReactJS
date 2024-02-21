import React from 'react';
import '../Components/Header.css'


function Myhead() {
  return (
    <>
      <div className="headMain bg-[#000000] h-12 w-100 flex justify-around space-x-0 > * + *">
        <div className="logo font-semibold cursor-pointer">
        <h1 className="text-orange-500 p-2 font-semiboldn text-lg font-extrabold">Tech Delta</h1>
        </div>
        <div className="menubar text-white p-2 text-sm flex gap-6">
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
