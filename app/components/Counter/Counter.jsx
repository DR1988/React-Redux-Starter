import React from 'react'
import PropTypes from 'prop-types'
import s from './Counter.scss'

const Counter = props => (
  <div className={s.root}>
    <h1>Hello!</h1>
    <p>Counts: {props.counter.value} </p>
    <button onClick={props.incrementByOne} >+</button>
    <button onClick={props.incrementByOneAync}>+Async</button>
    <button onClick={props.reset}>Reset</button>
  </div>
)

Counter.propTypes = {
  incrementByOne: PropTypes.func,
  incrementByOneAync: PropTypes.func,
  reset: PropTypes.func,
  value: PropTypes.number,
}

export default Counter
