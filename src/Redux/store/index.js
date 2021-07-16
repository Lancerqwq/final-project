import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import books from "../reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, books);
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export { persistor, store };
