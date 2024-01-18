import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { Open } from "../../Redux/action/FormAction";

import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Navbar1() {
  let dispatch = useDispatch();

  return (
    <div className="Navbar1">
      <div className="chapNavbar">
      <div className="hamburger">
          <GiHamburgerMenu onClick={() => dispatch(Open())} />
        </div>
      </div>
      <div className="ongNavbar">
        <b>Profile</b>
        <IoSettingsOutline />
      </div>
      <Outlet />
    </div>
  );
}
