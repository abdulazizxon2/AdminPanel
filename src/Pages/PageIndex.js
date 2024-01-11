import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";

export default function PageIndex() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
}
