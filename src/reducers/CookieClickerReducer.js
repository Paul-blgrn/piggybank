import { ADD_ITEM, DELETE_ITEM, RESET_ITEM } from "../actionTypes/actionTypes";
import produce from "immer";

const initialState = {
  numOfItems: 0,
};

export const cartReducer = produce((draft = initialState, action) => {
  const { type } = action;
  
  switch (type) {
    case ADD_ITEM: {
      draft.numOfItems++;
      break;
    }
    case DELETE_ITEM: {
      draft.numOfItems--;
      break;
    }
    case RESET_ITEM: {
      draft.numOfItems = 0;
      break;
    }
    default: {
      return draft;
    }
  }
});