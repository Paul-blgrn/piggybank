import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import store from "../../store/Store";
import { Provider } from "react-redux";

import './PiggyBank.css';

//import Cart from "./component/Cart";

const Piggybank = () => {
    // change page title here
    useEffect(() => {
      document.title = 'Piggy Bank - PiggyBank';
    }, []);

    // navigation to return back
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // new line
    };

    return (
      <div className="App">
        <header className="App-header">
        {/* body */}
          <div className="Piggy-Container">
            <h1 id="Piggy-main-title">My Piggy Bank</h1>
          </div>
        
          <p>
            Welcome <strong>User</strong>
          </p>

          <hr/>

          <div>
            <button className="Piggybank-buttonApp" onClick={handleGoBack}>Launch App</button>
            <button className="Piggybank-buttonBack" onClick={handleGoBack}>Go Back</button>
          </div>
          <Provider store={store}>
            {/* <Cart />*/}
          </Provider>

        {/* end body */}
        </header>
      </div>
    );
};

export default Piggybank;