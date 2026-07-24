import React from 'react'
import { Link } from "react-router-dom";
import  '../style.css'

const Navbar = () => {
  return (
    <div className="flex-con ">
      <h2>Logo</h2>
      {/* <Link to="/" /> */}
      <div className="div">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar