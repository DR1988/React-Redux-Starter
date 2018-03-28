import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { actions, selectCounter } from '../../redux/counter'
import Counter from './../../components/Counter/Counter'

class CounterContainer extends Component {
  static propTypes = {
    counter: PropTypes.object.isRequired,
    reset: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const d = await res.json()
    // console.log('d', d)
    // .then(r => r.json())
    // .then(d => console.log('d', d))
  }

  incrementByOne = () => this.props.increment(1)
  incrementByOneAync = () => this.props.incrementAsync(1)
  render() {
    return (<div>
      <Counter
        counter={this.props.counter}
        incrementByOne={this.incrementByOne}
        incrementByOneAync={this.incrementByOneAync}
        reset={this.props.reset}
      />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    counter: selectCounter(state),
  }
}

export default withRouter(connect(mapStateToProps, actions)(CounterContainer))
