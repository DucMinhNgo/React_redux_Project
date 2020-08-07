import React from 'react'

import './App.css'
import {connect} from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
  setDefaultCounter
} from "./redux/Counter/counter.actions"

function App (props) {
  return (
  <div className="App">
    <div>Count: {props.count}</div>
    <button onClick={() => props.increaseCounter()}>Increase Count</button>
    <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
    <button onClick={() => props.setDefaultCounter()}>Set Default Count</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    setDefaultCounter: (_num) => dispatch(setDefaultCounter(_num)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);