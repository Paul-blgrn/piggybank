import React, { useState, useCallback, useEffect }  from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, resetItem } from "../actions/CookieClickerAction";

import cookie from '../cookie.png';

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
    <div className="cart">

      <h3>Cookie Clicker</h3>

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
          {state.numOfItems}
        </div>
      </div>

      {/* RESET BUTTON */}
      <button className="cart-red"
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(resetItem());
        }}
      >
        Remise à zéro
      </button>
    </div>
  );
};

export default CookieClicker;