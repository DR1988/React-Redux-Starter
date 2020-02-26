import { createTypes, createActions, handleActions } from '../utils/reduxUtils'


const counterTypes = ['increment', 'incrementAsync', 'reset'] as const
// const counterTypes = ['INCREMENT', 'INCREMENT_ASYNC', 'RESET'] as const
type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

type CounterTypes = ElementType<typeof counterTypes>

export const types = createTypes<CounterTypes>(counterTypes.map(t => t), 'COUNTER')

interface InitialState {
  value: 0
  request: false
}
const initialState: InitialState = {
  value: 0,
  request: false,
}

console.log(types)
export const actions = createActions(types)
console.log(actions)

export const selectCounter = (state: {[key: string]: any}) => state.counter

type t = typeof actions
const reducer = handleActions<t, InitialState>({
  [types.incrementAsync]: (state: InitialState) => ({
    ...state,
    request: true,
  }),
  [types.increment]: ({ payload }: { payload: number}, state: InitialState, ) => (
    {
      value: state.value + payload,
      ...state
    }),
  [types.reset]: () => initialState,
}, initialState)

export default reducer

