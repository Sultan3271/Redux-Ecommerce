// action.js
import { ADD_TO_CART, REMOVE_TO_CART } from "./contants";

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item
  };
}

export function removeToCart(item) {
  return {
    type: REMOVE_TO_CART,
    data: item
  };
}
