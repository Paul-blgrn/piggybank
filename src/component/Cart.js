import React, { useState, useCallback, useEffect }  from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, resetItem } from "../actions/cartAction";

import cookie from '../cookie.png';

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [shake, setShake] = useState(false);
  const [isStart, setIsStart] = useState(false);

  /* useEffect(() => {
    const handleContextmenu = e => {
      e.preventDefault();
      //dispatch(deleteItem());
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, []) */

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
      setShake(true);
      
      // decrement number of items by 1
      dispatch(deleteItem());
      
      // Buttons stops to shake
      setTimeout(() => setShake(false), 100);
    }
  }

  return (
    <div className="cart">
      <h3>Cookie Clicker</h3>
      <div className="cookie-clicker">
        <img 
          src={cookie} 
          className = {shake ? `shake` : `cookie-img`} 
          alt="cookie clicker" 
        />
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

export default Cart;