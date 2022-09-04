import { ADD_ITEM, CLEAR_CART, FINISH_CART, REMOVE_ITEM } from "./actionTypes";
import { ICart } from "./thunk";

const cartReducer = (
  state: [] | ICart[] = [],
  action: { type: string; cart?: ICart[] }
) => {
  switch (action.type) {
    case ADD_ITEM:
      state = action.cart!;
      return state;

    case REMOVE_ITEM:
      state = action.cart!;
      return state;

    case CLEAR_CART:
      state = [];
      return state;

    case FINISH_CART:
      state = [];
      return state;

    default:
      return state;
  }
};

export default cartReducer;
