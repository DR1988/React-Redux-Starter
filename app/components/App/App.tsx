import React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import Main from '../Main/Main'

const App = ({ store }: { store: Store}) => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default App
