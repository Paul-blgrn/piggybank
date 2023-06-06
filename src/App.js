import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from './component/homePage/Home';
import Piggybank from "./component/piggyBank/Piggybank";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='piggybank' element={<Piggybank />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
 
export default App;
