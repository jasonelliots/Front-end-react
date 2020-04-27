import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { BrowserRouter as Router } from 'react-router-dom';

//redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers'

const store= createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
