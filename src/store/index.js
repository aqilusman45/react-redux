import {CounterReducers} from './reducer/counter';
import {createStore} from 'redux';

const CounterStore = createStore(CounterReducers);
export {CounterStore};