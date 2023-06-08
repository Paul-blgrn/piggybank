import React, { useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, resetItem } from "../../actions/cookieClicker/CookieClickerAction";

import './CookieClicker.css';
import cookie from './cookie.png';

const CookieClicker = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [shake, setShake] = useState(false);
  const [rShake, setRShake] = useState(false);

  const clickCookie = () => {
      // Button begins to shake
      setShake(true);
      
      // increments number of items by 1
      dispatch(addItem());

      // Buttons stops to shake
      setTimeout(() => setShake(false), 100);
  }

  const rightClickCookie = () => {
    if (state.numOfItems > 0) {
      // Button begins to shake
      setRShake(true);
      
      // decrement number of items by 1
      dispatch(deleteItem());
      
      // Buttons stops to shake
      setTimeout(() => setRShake(false), 100);
    }
  }

  return (
    <div className="cookie">

    <p>
      Ou <br/>Cliquez sur ce magnifique <strong>Cookie</strong>
    </p>

      {/* COOKIE CLICKER */}
      <div className="cookie-clicker">
        {/* COOKIE IMAGE */}
        <img 
          src={cookie} 
          className = {shake === true ? `shake` : rShake === true ? `shake-reverse` : `cookie-img`} 
          alt="cookie clicker" 
        />

        {/* COUNTER */}
        <div 
          className="cookie-clicker-counter" 
          onClick = {clickCookie} 
          onContextMenu={(e) => {
            e.preventDefault();
            rightClickCookie();
          }}
        >
          <div className={state.numOfItems === 13 ? `cookie-13` : state.numOfItems >= 100 ? `cookie-100` : `cookie-base` }>
            {state.numOfItems}
          </div>
        </div>
      </div>

      {/* RESET BUTTON */}
      <button className="cookie-red"
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(resetItem());
        }}
      >
      </button>
    </div>
  );
};

export default CookieClicker;