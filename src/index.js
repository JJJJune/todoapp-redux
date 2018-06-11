import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './components/reducers/index'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp)

ReactDOM.render(
    <Provider store={todoApp}>
     <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
