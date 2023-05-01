import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";


const search = (state = 'Search for Giphy "search powered by GIPHY" ', action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_SEARCH') {
        // This changes the value of our reducer
        return action.payload;
    }else if (action.type === 'CLEAR_FORM') {
        return ('Search for Giphy "search powered by GIPHY" ');
    }
    // Value of our reducer remains unchanged
    return state;
}


const storeInstance = createStore(
  combineReducers({
    // Other reducers go here
    search,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
