import React from 'react'
import { connect, ConnectedProps, useDispatch  } from 'react-redux'

import { actions, counterState, selectCounter } from '../../redux/counter'

import s from './Main.scss'

// interface P extends typeof actions

const mapStateToProps = (state) => ({
  counter: selectCounter(state)//.counter
})

const connector = connect(
  mapStateToProps,
  actions
)
type PropsFromRedux = ConnectedProps<typeof connector>

//own props
type Props = PropsFromRedux & {
  color: string
}
class Main extends React.Component<Props, {}> {

  // constructor(props){
  //   super(props)
  // }
  componentDidMount() {
    console.log(this.props)
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
        <button onClick={() => this.props.increment(1)}>+</button>
        <button onClick={() => this.props.decrement(2)}>-</button>
      </div>
    )
  }
}

export default connector(Main)
