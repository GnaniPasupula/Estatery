import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkStyle = ({ isActive }) => ({
  backgroundColor: isActive ? "rgb(199 210 254)" : "#fff",
  color: isActive ? "rgb(99 102 241)" : "#000",
});

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto border-b">
      <div className="flex items-center space-x-5">
        <a href="/" className="font-bold text-xl mx-8">
          Estatery
        </a>
        <div className="hidden md:inline-flex items-center space-x-8">
          <NavLink
            style={NavLinkStyle}
            to="/rent"
            className="px-4 py-1 rounded hover:bg-indigo-200 hover:text-indigo-500 font-semibold cursor-pointer"
          >
            Rent
          </NavLink>
          <h3 className="px-4 py-1 rounded hover:bg-indigo-200 hover:text-indigo-500 font-semibold cursor-pointer">
            Buy
          </h3>
          <h3 className="px-4 py-1 rounded hover:bg-indigo-200 hover:text-indigo-500 font-semibold cursor-pointer">
            Sell
          </h3>
          <h3 className="px-4 py-1 rounded hover:bg-indigo-200 hover:text-indigo-500 font-semibold cursor-pointer">
            Manage Property
          </h3>
          <h3 className="px-4 py-1 rounded hover:bg-indigo-200 hover:text-indigo-500 font-semibold cursor-pointer">
            Resources
          </h3>
        </div>
      </div>

      <div className="flex items-center text-indigo-500 space-x-5">
        <h3 className="px-4 py-1 border border-indigo-500 rounded cursor-pointer">
          Login
        </h3>
        <h3 className="bg-indigo-500 px-4 py-1 text-white rounded cursor-pointer">
          Sign up
        </h3>
      </div>
    </header>
  );
}

export default Header;
