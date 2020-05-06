import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducers } from "./ducks";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
