import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from "redux-thunk";
// import logger from 'redux-logger';

import App from "./App";
import { reducer as formReducer } from 'redux-form';
import loginReducer from './store/reducers/authReducers/loginReducer'
import registerReducer from './store/reducers/authReducers/registerReducer';

const rootReducer = combineReducers({
  form: formReducer,
  login: loginReducer,
  register: registerReducer
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

