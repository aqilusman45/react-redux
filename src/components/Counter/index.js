import React, { Component } from 'react';
import { createStore } from "redux";



// First Of We  will be creating a store that will contain our initial State;

const store = createStore((state = { count: 0 }, action) => {
  console.log("Running");
  // In the code below we will check the type of action and return new object depending
  //on the action
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      }
    case "RESET":
      return {
        count: 0,
      }
    default:
      return state
  }
})

// We have a function on Creatstore to get the current state 

console.log("Before Dispatch", store.getState());

// Store runs everytime we dispatch an action
// Ini dispatch we pass the new state 
// store.dispatch({
//Here Type is the Type of Action this is a convention for redux as this decides the type 
//of reducer that would be taken on behalf of the action set
//Again using all caps it is a naming convention in Redux.
//   type: "INCREMENT",
// })

for (let index = 0; index < 6; index++) {
  store.dispatch({
    type: "INCREMENT",
  })

  console.log("After Increment", store.getState());
}

// store.dispatch({
//   type: "INCREMENT",
// })

// console.log("After Increment", store.getState());


for (let index = 0; index < 6; index++) {

  store.dispatch({
    type: "DECREMENT",
  })

  console.log("After decrement", store.getState());

}


store.dispatch({
  type: "RESET"
})

console.log("After Reset", store.getState());





// const COUNTER = {

// }


// Step 1: Create a Store with State and Reducer
// const store = createStore(reducer, {
//   type: "INITIAL_STATE",
//   count: 0,
//   payload: null,
// })


// let count = 0;
// // Step 2: Create a Reducer which is usually a pure Function with State and Action
// function reducer(state, action) {
//   if (action.type === "ADD_ONE") {
//     count += 1;
//     return {
//       type: "One Added",
//       count,
//       payload: null,
//     }
//   }
//   return state
// }


// // Step 3: Subscribe

// // store.subscribe(() => {
// //   console.log("Store is now", store.getState());
// // })

// // Step 4: Dispatch Action
// // store.dispatch({type: "ADD_ONE" , payload : "Hello"});


class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }


  render() {
    // store.subscribe(() => {
    //   let count = store.getState().count;
    //   this.setState({
    //     count
    //   })
    // })

    return (
      <div>
        <h1>Counter</h1>
        {/* <h2>{this.state.count}</h2> */}
        {/* <button onClick={() => {
          store.dispatch({ type: "ADD_ONE" });
        }}>
          Increment
          </button> */}
      </div>
    );
  }
}

export default Counter;
