import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App/'
import logger from 'middleware/logger_middleware.js'
import thunk from 'middleware/thunk.js'
import webrtc from 'middleware/webrtc_middleware.js'

// import { Router, useRouterHistory } from 'react-router';
// import { createHashHistory } from 'history';
// import routes from './routes';
// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const store = createStore(
    reducer,
    applyMiddleware(
        logger,
        thunk,
        webrtc(new WebRTC({  //This is where we pass the thingy.
            ...config
        }))
        //ErrReporting
        //etc etc
    )

);
(function() {
    // window.debug = true;
    if(window.debug){
        console.log = function(){};
    }
}());




render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app-container')
)
