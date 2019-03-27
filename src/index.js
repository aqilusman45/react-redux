import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Counter />, document.getElementById('root'));
serviceWorker.unregister();
