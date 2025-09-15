import React, { useState, useMemo } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Loger from "./pages/loger";
import Login from "./pages/login";
import Register from "./pages/Register";

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/loger" element={<Loger/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}
