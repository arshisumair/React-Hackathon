import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-pink-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Hijab Styles</h1>
      <div className="space-x-4">
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
