import React from 'react';
import { ReactDOM, render } from 'react-dom';
// import { Router, useRouterHistory } from 'react-router';
// import { createHashHistory } from 'history';
// import routes from './routes';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App/'

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const store = createStore(reducer,{
                                    MenuItems:[
                                                {id:1},
                                                {id:2},
                                                {id:3},
                                                {id:4}
                                    ],
                                    Messages:[]
                                   });

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
)
