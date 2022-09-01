import { ALL_PRODUCTS, FILTER_PRODUCTS } from "./actionTypes";
import { IResponse } from "../../../interface/products";

const productsReducer = (
  state: {} | IResponse = {},
  action: { type: string; products?: IResponse }
) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      state = action.products!;
      return state;

    case FILTER_PRODUCTS:
      state = action.products!;
      return state;

    default:
      return state;
  }
};

export default productsReducer;
