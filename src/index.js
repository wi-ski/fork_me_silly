import React from 'react';
import { ReactDOM, render } from 'react-dom';
// import { Router, useRouterHistory } from 'react-router';
// import { createHashHistory } from 'history';
// import routes from './routes';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Message from './reducers/message'
import App from './components/App'

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const store = createStore(reducer);
// const store = createStore(reducer);

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
)
