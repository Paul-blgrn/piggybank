import React, { useEffect } from "react";

import './PiggyBank.css';
import WelcomeApp from "./welcomeApp/Welcome";
import PiggyApp from "./piggyApp/PiggyApp";

//import Cart from "./component/Cart";

export default function Piggybank() {

    // change page title here
    useEffect(() => {
      document.title = 'Piggy Bank - PiggyBank';
    }, []);

    return (
      <div className="App">
        <header className="App-header">
        {/* body */}

        {/* DIV ID piggy-home */}
        <WelcomeApp />

        {/* DIV ID piggy-content */}
        {/* show piggybank table */}
        <PiggyApp />

        {/* end body */}
        </header>
      </div>
    );
};