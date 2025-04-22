import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <NavLink to="/" className="mx-2">Home</NavLink>
      <NavLink to="/fav" className="mx-2">Favourites</NavLink>
      <NavLink to="/login" className="mx-2">Login</NavLink>
    </nav>
  );
}

export default Navbar;
