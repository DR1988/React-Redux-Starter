import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions, selectCounter } from '../../redux/counter'
import Main from './../../components/Main/Main'

class MainContainer extends Component {
  static propTypes = {
    counter: PropTypes.object,
    reset: PropTypes.func,
    increment: PropTypes.func,
    incrementAsync: PropTypes.func,
  }

  incrementByOne = () => this.props.increment(1)
  incrementByOneAync = () => this.props.incrementAsync(1)

  render() {
    // console.log(this.props)
    return (
      <Main
        counter={this.props.counter}
        incrementByOne={this.incrementByOne}
        incrementByOneAync={this.incrementByOneAync}
        reset={this.props.reset}
      />
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    counter: selectCounter(state),
  }
}

export default connect(mapStateToProps, actions)(MainContainer)

