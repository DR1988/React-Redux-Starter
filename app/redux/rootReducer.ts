import { combineReducers } from 'redux'

import counter from './counter'
// import users from './users'
import { messageReducer } from './message'

 const rootReducer = combineReducers({
  counter,
  // users,
  messageReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

