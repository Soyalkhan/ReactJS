import React from "react";

import bannerImg from "../images/bn-img.png"

function Myhead() {
  return (
    <>
      <div className="MainBanner grid grid-cols-1 sm:grid-cols-2 h-96 bg-red-200">
        <div className="innerbanner1 p-10">
          <h1 className="font-arial font-extrabold text-4xl text-red-700">
            <span className="inline-block py-2">
              GET 100% ASSURED GROW WITH TECH DELTA
            </span>
          </h1>
          <p className="text-red-800 font-sans">
            Edge to edge support will be provided 100% Moneyback Guarantee.
          </p>

          <h1 className="font-arial font-extrabold text-4xl text-red-700">
            <span className="inline-block py-2">Yes it's achiveable !</span>
          </h1>

          <button className="bg-red-500 font-semibold text-white rounded-md p-2 mt-4 hover:bg-sky-700">
            Enroll Now!
          </button>
        </div>
        <div className="innerbanner2 justify-self-end">
        <div className="div2 ">
          <img className="max-w-full h-96" src={bannerImg} alt="img" />
        </div>
        </div>
        
      </div>
    </>
  );
}
export default Myhead;
