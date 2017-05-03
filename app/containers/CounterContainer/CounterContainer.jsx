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
    this.state = {
      open: true,
    }
  }
  componentDidMount() {
    console.log($('.btn')[0])
  }
  incrementByOne = () => this.props.increment(1)
  incrementByOneAync = () => this.props.incrementAsync(1)
  open = () => {
    $('span').click(() => console.log(111))
    $('span').css('cursor', 'pointer')
    // this.setState({
    //   open: !this.state.open,
    // })
  }
  render() {
    return (<div>
      <Counter
        open={this.open}
        counter={this.props.counter}
        incrementByOne={this.incrementByOne}
        incrementByOneAync={this.incrementByOneAync}
        reset={this.props.reset}
      />
      {this.state.open ? <span>Yeah!</span> : null}
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
