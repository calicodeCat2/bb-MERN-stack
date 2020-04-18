import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from "redux-thunk";
// import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

import App from "./App";
import authReducer from './store/reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
})
const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

