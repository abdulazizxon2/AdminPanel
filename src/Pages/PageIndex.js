import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Componetns/Navbar/Navbar";
import Admins from "./Admins";
import Categories from "./Categories";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Product from "./Product";
import LogOut from "./LogOut";

export default function PageIndex() {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Admins />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/admins" element={<Admins/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/log" element={<LogOut/>}/>
        </Route>
      </Routes>
    </div>
  );
}
