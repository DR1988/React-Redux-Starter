import React from 'react'
import { connect, ConnectedProps, useDispatch } from 'react-redux'

import { actions } from '../../redux/counter'
import { actionsObject } from '../../redux/message'
import { RootState, selectCounter, selectMessages } from '../../redux/rootReducer'

import s from './Main.scss'

// interface P extends typeof actions

const mapStateToProps = (state: RootState) => {
  console.log('state', state)
  return {
    counter: selectCounter(state),//.counter
    messages: selectMessages(state),
  }
}

const connector = connect(
  mapStateToProps,
  { ...actions, ...actionsObject }
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
    // console.log(this.props)
  }

  render() {
    console.log(this.props)
    return (
      <div className={s.root}>
        <div>{this.props.counter.value }</div>
        {this.props.messages.map((message) => <div key={message.timestamp}>{message.text}</div>)}
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
        <button onClick={() => this.props.increment(1)}>+</button>
        <button onClick={() => this.props.decrement(2)}>-</button>
        <div style={{
          position: 'absolute', top: '20px', left: '50px', display: 'flex',
          flexDirection: 'column'
        }}>
          <button onClick={() => this.props.sendMessages({ text: 'Some random text', timestamp: +Math.random().toFixed(2) })}>send Message</button>
          <button onClick={() => this.props.deleteLastMessages()}>remove messages</button>
        </div>
      </div>
    )
  }
}

export default connector(Main)
