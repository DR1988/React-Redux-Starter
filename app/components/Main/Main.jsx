import React from 'react'
import PropTypes from 'prop-types'
import s from './Main.scss'

const Main = (props) => {
  // console.log('props', props)
  return (
    <div className={s.root}>
      <h1 className={s.green}>Hello!</h1>
      <p>Counts: {props.counter.value} </p>
      <button onClick={props.incrementByOne} >+</button>
      <button onClick={props.incrementByOneAync}>+Async</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  )
}

Main.propTypes = {
  incrementByOne: PropTypes.func,
  incrementByOneAync: PropTypes.func,
  reset: PropTypes.func,
  value: PropTypes.number,
}

export default Main
