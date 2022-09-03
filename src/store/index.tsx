import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./modules/products/reducer";
import filtersReducer from "./modules/filters/reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["filters"],
};

const rootReducers = combineReducers({
  products: productsReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducers>;
