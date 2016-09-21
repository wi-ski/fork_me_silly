import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';
import { createStore } from 'redux'
import Message from './reducers/message'
import App from './components/App'
// window._________testing = true;
require('./pages/style.css');
require('./pages/powr.css');


const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const render = () => {
  ReactDOM.render(
      <App value={store.getState()} />,
      document.getElementById('app')
  );
};

const store = createStore(Message);

document.addEventListener('click', () => {
  store.dispatch({ type: 'KEYUP'});
})

store.subscribe(render);
render();
