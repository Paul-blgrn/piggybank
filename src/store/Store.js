import { createStore } from "redux";
import { cartReducer } from "../reducers/cookieClicker/CookieClickerReducer";

const store = createStore(cartReducer);

export default store;