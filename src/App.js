import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from './component/Home';
import Piggybank from "./component/Piggybank";

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
