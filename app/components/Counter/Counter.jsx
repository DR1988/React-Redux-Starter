import React from 'react'
import PropTypes from 'prop-types'
import s from './Counter.scss'

const Counter = props => {
  console.log(props.counter)
  return (
    <div className={s.root}>
      <h1>Hello!</h1>
      <p>Counts: {props.counter.value} </p>
      <button
        className={`btn btn-default ${s.white}`}
        onClick={props.open}
      > Click</button>
      <button onClick={props.incrementByOne} >+</button>
      <button onClick={props.incrementByOneAync}>+Async</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  )
}

Counter.defaultProps = {
  value: 0,
  counter: {},
}

Counter.propTypes = {
  incrementByOne: PropTypes.func.isRequired,
  incrementByOneAync: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  value: PropTypes.number,
  counter: PropTypes.object, //eslint-disable-line react/forbid-prop-types
}

export default Counter
