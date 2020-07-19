import { applyMiddleware, createStore, Store } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger({
  collapsed: true,
});

export default function configureStore(initialState?: any) {
  const store: Store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );

  return store;
}
