import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import AnnouncementBar from '../TopBar/Annoucement-Bar.jsx'

function Myhead() {
  return (
    <>
<AnnouncementBar/>
      <div className="headMain bg-[#000000] h-15 w-100 flex justify-around">
        <div className="logo font-semibold cursor-pointer">
          <Link to="/">
            <h1 className="text-white p-2 font-semiboldn text-lg font-extrabold">
              <span className="text-blue-400 p-2 font-semiboldn text-lg font-extrabold">
                TECH
              </span>
              SHOP
            </h1>
          </Link>
        </div>
        <div className="menubar text-white p-3 text-sm flex gap-6">
          <NavLink
            to="/Category"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-white"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Category
          </NavLink>
          <NavLink
            to="/Collection"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-white"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Collection
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-white"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-white"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            About Us
          </NavLink>
        </div>
        <div className="action-side p-3 gap-5 flex">
          <div className="search">
            <FontAwesomeIcon
              className="text-white hover:text-slate-400 cursor-pointer"
              icon={faSearch}
            />
          </div>
          <div className="bag">
            <FontAwesomeIcon
              className="text-white hover:text-slate-400 cursor-pointer"
              icon={faShoppingBag}
            />
          </div>
          <div className="user">
            <FontAwesomeIcon
              className="text-white hover:text-slate-400 cursor-pointer"
              icon={faUser}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Myhead;
