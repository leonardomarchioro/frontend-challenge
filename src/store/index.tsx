import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./modules/products/reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const rootReducers = combineReducers({
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducers>;
