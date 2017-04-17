import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './app.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.renderGreetingWidget = this.renderGreetingWidget.bind(this)

    this.state = {
      name: this.props.initialName,
      touched: false,
      greetingWidget: () => null,
    }
  }

  handleNameChange(val) {
    const name = val.target.value

    this.setState({ touched: true })

    if (name.length === 0) {
      this.setState({ name: this.props.initialName })
    } else {
      this.setState({ name })
    }
  }

  renderGreetingWidget() {
    if (!this.state.touched) {
      return null
    }

    return (
      <div>
        <hr />
        <p>Здравствуйте, {this.state.name}!</p>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <div>
          <p>Введите Ваше имя:</p>
          <div><input onChange={this.handleNameChange} /></div>
          {this.renderGreetingWidget()}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  initialName: PropTypes.string,
}

App.defaultProps = {
  initialName: 'Аноним',
}
// App.propTypes = propTypes
// App.defaultProps = defaultProps

export default App
