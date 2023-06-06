import React from "react";
import { Link } from "react-router-dom";

import store from "../../store/Store";
import { Provider } from "react-redux";

import CookieClicker from "../cookieClicker/CookieClicker";

import logo from './piggybank.png';
import './Home.css';

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
            <CookieClicker />
          </Provider>
        </header>
      </div>
    );
};

export default Home;