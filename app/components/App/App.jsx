import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
// import Main from './../../containers/Main/Main'
import Main from './../Main/Main'

const App = ({ store }) => (
  <Provider store={store}>
    <Main />
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired, //eslint-disable-line react/forbid-prop-types
}

export default App
