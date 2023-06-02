import React from "react";
import { Link } from "react-router-dom";

import logo from '../piggybank.svg';
import '../App.css';

import store from "../store";

import { Provider } from "react-redux";

//import Cart from "./component/Cart";

const Home = () => {

    return (
        <div className="App">
        <header className="App-header">
          <Link to="/piggybank">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <hr/>
          <p>
            Cliquez sur le cochon pour accéder à <strong>Piggy Bank</strong>
          </p>
          <Provider store={store}>
            {/* <Cart />*/}
          </Provider>
        </header>
      </div>
    );
};

export default Home;