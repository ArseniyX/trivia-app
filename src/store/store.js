import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

const composeEnhancers = composeWithDevTools({
  realtime: true,
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
