import {createStore} from 'redux';

// First Of We  will be creating a store that will contain our initial State;

const store = createStore((state = {count : 0})=>{
    return state;
})

// We have a function on Creatstore to get the current state 

console.log(store.getState());