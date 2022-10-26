import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Manager from "./ContactManagerApp/component/Manager";

const APP = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route element={<App />} path="/App" />
        <Route element={<Manager />} path="/Manager" />
      </Routes>
    </Router>
  );
};

export default APP;
