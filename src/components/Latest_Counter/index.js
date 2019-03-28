import React from 'react';
import {connect} from 'react-redux';
import { CounterAction } from '../../store/action/counter';

class LatestCounter extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.props.increment}>
                    Increment
                </button>
                <br/>
                <button onClick={this.props.decrement}>
                    Decrement
                </button>
                <br/>
                <button onClick={this.props.reset}>
                    Reset
                </button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        count : state.count,
        text : state.text,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        increment : ()=> dispatch(CounterAction.add()),
        decrement : ()=> dispatch(CounterAction.sub()),
        reset : ()=> dispatch(CounterAction.reset()),
    }
}

const CounterConnect = connect(mapStateToProps , mapDispatchToProps)(LatestCounter);

export {CounterConnect};