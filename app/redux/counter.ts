import { createTypes, createActions, handleActions } from '../utils/reduxUtils'

export const types = createTypes([
  'INCREMENT',
  'INCREMENT_ASYNC',
  'RESET',
], 'COUNTER')

interface InitialState {
  value: 0
  request: false
}
const initialState: InitialState = {
  value: 0,
  request: false,
}

export const actions = createActions(types)
export const selectCounter = (state: {[key: string]: any}) => state.counter

const reducer = handleActions({
  [types.INCREMENT_ASYNC]: (state: InitialState) => ({
    ...state,
    request: true,
  }),
  [types.INCREMENT]: ({ payload }: { payload: number}, state: InitialState, ) => (
    {
      value: state.value + payload,
      ...state
    }),
  [types.RESET]: () => initialState,
}, initialState)

export default reducer

