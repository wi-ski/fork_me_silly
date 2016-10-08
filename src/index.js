import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App/'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// import { Router, useRouterHistory } from 'react-router';
// import { createHashHistory } from 'history';
// import routes from './routes';
// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const store = createStore(reducer);
(function() {
    // window.debug = true;
    if(window.debug){
        console.log = function(){};
    }
}())




render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app-container')
)
