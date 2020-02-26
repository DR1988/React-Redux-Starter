import { createTypes, createActions, handleActions } from '../utils/reduxUtils'


const counterTypes = ['incrementAsync', 'increment', 'decrement', 'reset'] as const
// const counterTypes = ['INCREMENT', 'INCREMENT_ASYNC', 'RESET'] as const
type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

type CounterTypes = ElementType<typeof counterTypes>

export const types = createTypes<CounterTypes>(counterTypes.map(t => t), 'COUNTER')

interface State {
  value: number
  request: false
}
const initialState: State = {
  value: 0,
  request: false,
}

console.log(types)
type ts = typeof types

export const actions = createActions<typeof types, State>(types)
console.log(actions)

export const selectCounter = (state: { [key: string]: any }) => state.counter

type t = typeof actions
//@ts-ignore
const reducer = handleActions<typeof actions, State>({
  [types.incrementAsync]: (state: Partial<State>) => ({
    ...state,
    request: true,
  }),
  [types.increment]: (state: State, { payload = 1 }: { payload: number }) => {
    console.log('payloadpayloadpayload', payload)
    console.log('statestatestate', state)
    return {
      value: state.value + payload,
      ...state
    }
  },
  [types.decrement]: (state: State, { payload }: { payload: number }, ) => (
    {
      value: state.value - 1,
      ...state
    }),
  [types.reset]: () => initialState,
}, initialState)

console.log('reducer', reducer)
export default reducer

