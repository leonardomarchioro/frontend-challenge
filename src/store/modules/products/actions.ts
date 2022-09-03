import { IProducts, IResponse } from "../../../interface/products";
import { ALL_PRODUCTS, FILTER_PRODUCTS } from "./actionTypes";

export const allProductsGet = (products: IResponse) => ({
  type: ALL_PRODUCTS,
  products,
});

export const filterProductsGet = (products: IResponse) => ({
  type: FILTER_PRODUCTS,
  products,
});
