import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './index.css';
import Card from './components/Card';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Card />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Card,
  errorBoundary(err, info, props) {
    return <div>Error in UserProfile Microfrontend</div>;
  },
});

export const { bootstrap, mount, unmount } = reactLifecycles;
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();