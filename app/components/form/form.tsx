import React from 'react'
import { connect, ConnectedProps, useDispatch } from 'react-redux'

import { actions } from '../../redux/counter'
import { actionsObject } from '../../redux/message'
import { RootState, selectCounter, selectMessages } from '../../redux/rootReducer'

import s from './form.scss'
import Validator from '../../helpers/validator'

class Form extends React.Component<{}, {}> {

  // constructor(props){
  //   super(props)
  // }
  componentDidMount() {
    // console.log(this.props)
  }

  submit = () => {
    
  }

  render() {
    return (
      <div className={s.root}>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        <button onClick={this.submit}>+</button>
        </form>
      </div>
    )
  }
}

export default Form
