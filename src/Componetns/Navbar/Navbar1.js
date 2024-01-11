import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";
export default function Navbar1() {
  return (
    <div className="Navbar1">
      <div className="ongNavbar">
        <b>Profile</b>
        <IoSettingsOutline />
      </div>
      <Outlet />
    </div>
  );
}
