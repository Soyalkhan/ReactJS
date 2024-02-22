import React from "react";
import "../Components/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function Myhead() {
  return (
    <>
      <div className="headMain bg-[#000000] h-15 w-100 flex justify-around">
        <div className="logo font-semibold cursor-pointer">
          <h1 className="text-white p-2 font-semiboldn text-lg font-extrabold">
            <span className="text-blue-400 p-2 font-semiboldn text-lg font-extrabold">
              TECH
            </span>
            SHOP
          </h1>
        </div>
        <div className="menubar text-white p-3 text-sm flex gap-6">
          <p className="hover:text-slate-400 cursor-pointer">Category</p>
          <p className="hover:text-slate-400 cursor-pointer">Collection</p>
          <p className="hover:text-slate-400 cursor-pointer">Contact</p>
        </div>
        <div className="action-side p-3 gap-5 flex">
          <div className="search">
            <FontAwesomeIcon className="text-white hover:text-slate-400 cursor-pointer" icon={faSearch} />
          </div>
          <div className="bag">
            <FontAwesomeIcon className="text-white hover:text-slate-400 cursor-pointer" icon={faShoppingBag} />
          </div>
          <div className="user">
            <FontAwesomeIcon className="text-white hover:text-slate-400 cursor-pointer" icon={faUser} />
          </div>
        </div>
      </div>
    </>
  );
} 
export default Myhead;
