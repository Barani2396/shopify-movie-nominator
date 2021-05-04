import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import movieReducer from "./movie/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["movie"],
};

const rootReducer = combineReducers({
  movie: movieReducer,
});

export default persistReducer(persistConfig, rootReducer);
