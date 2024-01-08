import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="chapNavbar">
            <NavLink to="/">
                <b>Admins </b>
            </NavLink>
            <NavLink to="/categories">
                <b>Categories</b>
            </NavLink>
            <NavLink to="/dashboard">
                <b>Dashboard</b>
            </NavLink>
            <NavLink to="/log">
                <b>log Out</b>
            </NavLink>
            <NavLink to="/product">
                <b>Product</b>
            </NavLink>
            <NavLink to="/settings">
                <b>Settings</b>
            </NavLink>
            
        </div>
        <Outlet/>
    </div>
  )
}
