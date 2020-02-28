import { createTypes, createActions, handleActions, createActionsB } from '../utils/reduxUtils'
import { Action } from 'redux'

const counterTypes = ['increment', 'incrementAsync', 'decrement', 'reset'] as const
// const counterTypes = ['INCREMENT', 'INCREMENT_ASYNC', 'RESET'] as const
type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

type CounterTypes = ElementType<typeof counterTypes>

export const types = createTypes<CounterTypes>(counterTypes.map(t => t), 'COUNTER')

export type counterState = {
  value: number
  request: boolean
}
const initialState: counterState = {
  value: 0,
  request: false,
}

type tt = keyof counterState
export const actions = createActions<typeof types, counterState>(types)
export const selectCounter = (state: { [key: string]: any }) => state.counter

const reducer = handleActions/* <typeof actions, State> */({
  [types.increment]: (state: counterState, { value = 1 }: Partial<counterState>) => ({
    ...state,
    value: state.value + value,
  }),
  [types.decrement]: (state: counterState, { payload }: Partial<counterState>) => {
    console.log('payload', payload)
    return {
    ...state,
      value: state.value - payload,
  }},
  [types.incrementAsync]: (state: counterState) => ({
    ...state,
    request: true,
  }),
  [types.reset]: () => initialState,
}, initialState)

export default reducer

