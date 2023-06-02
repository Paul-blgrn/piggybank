import { ADD_ITEM, DELETE_ITEM, RESET_ITEM } from "../actionTypes/actionTypes";

const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

const resetItem = () => {
  return {
    type: RESET_ITEM,
  };
};

export { addItem, deleteItem, resetItem };