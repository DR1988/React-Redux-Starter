import React from 'react'
import { Provider } from 'react-redux'
import Main from '../Main/Main'

const App = ({ store }) => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default App
