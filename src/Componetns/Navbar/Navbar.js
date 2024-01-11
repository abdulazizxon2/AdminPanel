import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logoses">
      <div className="logo">
        <img src="./white 1.png" alt="" />
        <h3>Admin Panel</h3>
      </div>
      <div className="hamburger">
      <GiHamburgerMenu />
      </div>
      </div>
      <div className="pegess">
        <p>Menu</p>
        <NavLink to="/">
          <b>Form</b>
        </NavLink>
        <NavLink to="/table">
          <b>Table</b>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
