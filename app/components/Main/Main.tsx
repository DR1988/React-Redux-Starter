import React from 'react'
import s from './Main.scss'

class Main extends React.Component {

  componentDidMount() {

  }

  render() {

    return (
      <div className={s.root}>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}
export default Main
