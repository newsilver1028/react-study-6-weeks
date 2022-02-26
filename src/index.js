// app에 store 넣고, 만든 reducer 반영
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

// 배포 레벨에서는 리덕스 발동시 찍히는 logger를 사용하지 않습니다.
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(ReduxThunk))
    : composeWithDevTools(applyMiddleware(logger,ReduxThunk));

// 위에서 만든 reducer를 스토어 만들때 넣어줍니다
// const store = createStore(rootReducer, enhancer);
const store = configureStore({ reducer: rootReducer })

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
