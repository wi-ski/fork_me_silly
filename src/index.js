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
const store = createStore(reducer,{
                                    MenuItems:{
                                        lastToggled:NaN,
                                        items:[
                                                {id:1,itemTitle:'Title and Description'},
                                                {id:2,itemTitle:'Form Elements'},
                                                {id:3,itemTitle:'Form Elements2'},
                                                {id:4,itemTitle:'Form Elements3'},
                                                {id:5,itemTitle:'Form Elements4'},
                                                {id:6,itemTitle:'Form Elements5'}
                                        ]
                                    },
                                    Messages:[]
                                   });

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app-container')
)
