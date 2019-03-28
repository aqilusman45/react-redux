import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {CounterConnect} from './components/Latest_Counter';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { CounterStore } from './store';

ReactDOM.render(
<Provider store={CounterStore}>
    <CounterConnect />
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
