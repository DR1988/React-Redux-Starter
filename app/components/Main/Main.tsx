import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../../redux/counter'

import s from './Main.scss'

class Main extends React.Component {

  componentDidMount() {

  }

  render() {
    console.log(this.props)
    return (
      <div className={s.root}>
        <div>{this.props.counter.value}</div>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: (payload = 1) => dispatch({ type: 'COUNTER_INCREMENT', payload }),
    decrement: (payload = 1) => dispatch({ type: 'COUNTER_DECREMENT' }),
    reset: () => dispatch({ type: 'reset' })
  }
}

export default connect(mapStateToProps, actions)(Main)
