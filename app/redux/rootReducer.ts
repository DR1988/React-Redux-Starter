import { combineReducers } from 'redux'

import counter from './counter'
// import users from './users'
import messageReducer, * as fromMessage from './message'

const rootReducer = combineReducers({
  counter,
  // users,
  messageReducer
} as const)

export type RootState = ReturnType<typeof rootReducer>

export const selectCounter = (state: RootState) => state.counter
export const selectMessages = (state: RootState) => fromMessage.getMessages(state.messageReducer)

export default rootReducer

//TODO: think of
type InferValueTypes<T> = T extends string ? T : never

type reducerKeys = InferValueTypes<keyof ReturnType<typeof rootReducer>>

function createSelector(state: RootState, key: reducerKeys) {
  return () => state[key]
}
