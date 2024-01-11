import React from "react";
import PageIndex from "./Pages/PageIndex";
import "./style/Style.css";
import Navbar from "./Componetns/Navbar/Navbar";
import Navbar1 from "./Componetns/Navbar/Navbar1";
import Config from "./Config/Config";
function App() {
  return (
    <>
      <Config />
      <div className="contener">
        <div className="main">
          <Navbar />
          <div className="liks">
            <Navbar1 />
            <PageIndex />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
