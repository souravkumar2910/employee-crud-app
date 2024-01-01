import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmpoyee";
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route exact path="/ui/add-employee" element={<AddEmployee />} />
        <Route exact path="/ui/edit-employee/:id" element={<AddEmployee />} />
        <Route exact path="/ui/view-employee" element={<ViewEmployee />} />
        <Route exact path="/" element={<ViewEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
