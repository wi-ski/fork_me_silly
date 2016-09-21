import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';
import { createStore } from 'redux'
import Message from './reducers/message'

// window._________testing = true;

const Texteditor = ({ value }) => (
  <div contentEditable="true" style=>{value}</div>
)

var divStyle = {
  height: '100px',
  border: '1px solid black',
  borderRadius: '2px',
  width: '100px',
  color: 'black'
}

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const render = () => {
  ReactDOM.render(

      <Texteditor value={store.getState()} />,
      document.getElementById('app')
  );
};

const store = createStore(Message);

document.addEventListener('click', () => {
  store.dispatch({ type: 'KEYUP'});
})

store.subscribe(render);
render();
