import { IFilterParams } from "../../../interface/products";
import { CLEAR_FILTER, SET_PRICE, SET_NAME } from "./actionTypes";

export const setFilter = (price: string) => ({
  type: SET_PRICE,
  price,
});

export const setName = (name: string) => ({
  type: SET_NAME,
  name,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});
