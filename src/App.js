import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from './component/homePage/Home';
import Piggybank from "./component/piggyBank/Piggybank";

import "./App.css";

// import fontAwesome
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { CustomProvider } from "./providers/CustomProvider";

// Library Creation for fontAwesome
library.add(fab, fas, far);
config.autoAddCss = true;

function App() {
  return (
    <CustomProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='piggybank' element={<Piggybank />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </CustomProvider>
  );
}
 
export default App;
