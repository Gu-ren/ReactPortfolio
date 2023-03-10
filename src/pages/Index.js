import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const index = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/ReactPortfolio" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default index;
