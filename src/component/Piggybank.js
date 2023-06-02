import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

import store from "../store";

import { Provider } from "react-redux";

//import Cart from "./component/Cart";

const Piggybank = () => {
    const navigate = useNavigate();
 
    const handleGoBack = () => {
        navigate(-1); // new line
    };
    return (
      <div className="App">
        <header className="App-header">
        {/* body */}
        
          <p>
            Bienvenue sur la page <strong>Piggy Bank</strong>
          </p>

          <hr/>

          <button className="Piggybank-buttonBack" onClick={handleGoBack}>Go Back</button>
          <Provider store={store}>
            {/* <Cart />*/}
          </Provider>

        {/* end body */}
        </header>
      </div>
    );
};

export default Piggybank;