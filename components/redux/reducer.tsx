// reducer.js
import { ADD_TO_CART, REMOVE_TO_CART } from "./contants";

const startState = [];

export const reducer = (state = startState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { ...action.data, isAdded: true }];
    case REMOVE_TO_CART:
      return state.filter((item) => item.title !== action.data.title);
    default:
      return state;
  }
};

