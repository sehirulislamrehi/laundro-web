import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import allReducer from "./reducer";
import { Provider } from 'react-redux';

// window.url = "https://study-admin.sehirulislamrehi.com/api"
window.url = "http://127.0.0.1:8000/api"

// const myStore = createStore(
//   allReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const myStore = createStore(allReducer)

root.render(
    <Provider store={myStore}>
      <App />
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
