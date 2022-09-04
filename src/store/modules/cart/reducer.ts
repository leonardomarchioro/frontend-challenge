import { ADD_ITEM, CLEAR_CART, FINISH_CART, REMOVE_ITEM } from "./actionTypes";
import { ICart } from "./thunk";

const cartReducer = (
  state: { quantaty: number; cart: ICart[] | [] } = { quantaty: 0, cart: [] },
  action: { type: string; cart?: { quantaty: number; cart: ICart[] } }
) => {
  switch (action.type) {
    case ADD_ITEM:
      state = action.cart!;
      return state;

    case REMOVE_ITEM:
      state = action.cart!;
      return state;

    case CLEAR_CART:
      state = { quantaty: 0, cart: [] };
      return state;

    case FINISH_CART:
      state = { quantaty: 0, cart: [] };
      return state;

    default:
      return state;
  }
};

export default cartReducer;
