import { CounterAction } from "../action/counter";

const INITIAL_STATE = {
    count: 0,
    text: '',
}

export function CounterReducers(state = { ...INITIAL_STATE }, action) {
    switch (action.type) {
        case CounterAction.INCREMENT_COUNTER:
            return {
                count: state.count + 1,
                text: "Counter Increment"
            }
        case CounterAction.DECREMENT_COUNTER:
            return {
                count: state.count - 1,
                text: "Counter Decrement",
            }
        case CounterAction.RESET_COUNTER:
            return {
                count: 0,
                text: "Counter Reset",
            }
        default:
         return state;
    }
}