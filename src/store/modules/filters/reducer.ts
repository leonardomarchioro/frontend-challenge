import { IFilterParams } from "../../../interface/products";
import { CLEAR_FILTER, SET_PRICE, SET_NAME } from "./actionTypes";

const filtersReducer = (
  state: {} | IFilterParams = {},
  action: { type: string; price?: string; name?: string }
) => {
  switch (action.type) {
    case SET_PRICE:
      state = { ...state, price: action.price! };
      return state;

    case SET_NAME:
      state = { ...state, name: action.name! };
      return state;

    case CLEAR_FILTER:
      state = {};
      return state;

    default:
      return state;
  }
};

export default filtersReducer;
