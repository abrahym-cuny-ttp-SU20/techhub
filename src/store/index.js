// Necessities and accessories for constructing our Redux store;
import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import * as storage from "redux-storage";
import throttle from "lodash/throttle";
import { sessionService ,sessionReducer} from "redux-react-session";
// Individual reducers altogether under an alias;
import * as reducers from "../reducers";

//Caching System:
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("techhub-client");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("techhub-client", serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};
const persistedState = loadState();

// Construct our Redux store;
const rootReducer = storage.reducer(combineReducers({...reducers, session: sessionReducer}));
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger)
);
const store = createStore(rootReducer, persistedState, middleware);

//Init the session service
sessionService.initSessionService(store);

//Limit the store from looking into localStorage to once every second
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;
