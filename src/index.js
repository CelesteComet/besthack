import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/video_box.css';
import './styles/chat_box.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let store;

store = createStore(rootReducer, applyMiddleware(thunk, logger));

window.store = store;

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
