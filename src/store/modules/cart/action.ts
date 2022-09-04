import { IProducts } from "../../../interface/products";
import { ADD_ITEM, CLEAR_CART, FINISH_CART, REMOVE_ITEM } from "./actionTypes";
import { ICart } from "./thunk";

export const addItem = (cart: ICart[]) => ({
  type: ADD_ITEM,
  cart,
});

export const removeItem = (cart: ICart[]) => ({
  type: REMOVE_ITEM,
  cart,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const finishCart = () => ({
  type: FINISH_CART,
});
