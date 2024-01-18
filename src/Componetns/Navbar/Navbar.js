import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaTable } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
export default function Navbar() {
  let state = useSelector((state) => state.FormRedux);
  let { open } = state;
  return (
    <div className={open ? "navbar-none" : "navbar"}>
      <div className="logoses">
        <div className="logo">
          <img src="./white 1.png" alt="" />
          <h3>Admin Panel</h3>
        </div>
      </div>
      <div className="pegess">
        <NavLink to="/">
          {open ? (
            <b className="display-nones">
              <IoMdHome />
              Form
            </b>
          ) : (
            <b>Form</b>
          )}
        </NavLink>
        <NavLink to="/table">
          {open ? (
            <b className="display-nones">
              <FaTable />
              Table
            </b>
          ) : (
            <b>Table</b>
          )}
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
