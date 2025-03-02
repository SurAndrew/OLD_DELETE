import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './index.css';
import Login from './components/Login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Login,
  errorBoundary(err, info, props) {
    return <div>Error in UserProfile Microfrontend</div>;
  },
});

 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
export const { bootstrap, mount, unmount } = reactLifecycles;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
