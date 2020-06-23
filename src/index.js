import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
//import './index.css';
import App from './app/App';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
 <Switch>
  <Provider store={store}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>
  </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
