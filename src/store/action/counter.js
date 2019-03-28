// import { ADD, SUB, RESET } from "../constants";

export class CounterAction {

        static INCREMENT_COUNTER = "INCREMENT";
        static DECREMENT_COUNTER = "DECREMENT";
        static RESET_COUNTER = "RESET";

    static add(payload) {
        return {
            type: CounterAction.INCREMENT_COUNTER,
            payload,
        }
    }

    static sub() {
        return {
            type: CounterAction.DECREMENT_COUNTER,
            payload: null,
        }
    }

    static reset() {
        return {
            type: CounterAction.RESET_COUNTER,
            payload: null,
        }
    }

}