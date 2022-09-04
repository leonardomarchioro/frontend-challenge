import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../..";
import { IProducts } from "../../../interface/products";
import { addItem, clearCart, finishCart, removeItem } from "./action";

export enum CartThunkStatus {
  ADD = "ADD",
  REMOVE = "REMOVE",
  CLEAR = "CLEAR",
  FINISH = "FINISH",
}

export interface ICart extends IProducts {
  quantaty?: number;
}

const cartThunk =
  (status: CartThunkStatus, cart: [] | ICart[], product: ICart) =>
  (dispatch: ThunkDispatch<RootState, void, Action>) => {
    switch (status) {
      case CartThunkStatus.ADD:
        const productOnCart = cart.find((ele) => ele.id === product.id);

        if (productOnCart) {
          productOnCart.quantaty!++;
          return dispatch(addItem(cart));
        }

        const newProduct = { ...product, quantaty: 1 };

        return dispatch(addItem([...cart, newProduct]));

      case CartThunkStatus.REMOVE:
        const removeProduct = cart.find((ele) => ele.id === product.id);

        if (removeProduct) {
          if (removeProduct.quantaty! > 1) {
            removeProduct.quantaty!--;

            return dispatch(removeItem(cart));
          }
          const newCart = cart.filter((ele) => ele.id !== product.id);

          return dispatch(removeItem(newCart));
        }

        return dispatch(removeItem(cart));

      case CartThunkStatus.CLEAR:
        return dispatch(clearCart());

      case CartThunkStatus.FINISH:
        return dispatch(finishCart());
    }
  };

export default cartThunk;
