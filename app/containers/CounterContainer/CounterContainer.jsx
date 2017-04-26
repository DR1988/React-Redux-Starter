import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { actions, selectCounter } from '../../redux/counter'
import Counter from './../../components/Counter/Counter'

class CounterContainer extends Component {
  static propTypes = {
    counter: PropTypes.object,
    reset: PropTypes.func,
    increment: PropTypes.func,
    incrementAsync: PropTypes.func,
  }

  incrementByOne = () => this.props.increment(1)
  incrementByOneAync = () => this.props.incrementAsync(1)

  render() {
    return (<Counter
      counter={this.props.counter}
      incrementByOne={this.incrementByOne}
      incrementByOneAync={this.incrementByOneAync}
      reset={this.props.reset}
    />)
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    counter: selectCounter(state),
  }
}

export default withRouter(connect(mapStateToProps, actions)(CounterContainer))
