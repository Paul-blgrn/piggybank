import { createStore } from "redux";
import { cartReducer } from "./reducers/CookieClickerReducer";

const store = createStore(cartReducer);

export default store;