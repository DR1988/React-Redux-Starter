const camelify = str => str
  .split('_')
  .map((s, i) => (i !== 0 ? s[0] + s.slice(1).toLowerCase() : s.toLowerCase()))
  .join('')

export const createTypes = (arr, namespace) =>
  arr.reduce((o, type) => ({
    ...o,
    [type]: `${namespace}/${type}`,
  }), {})

export const createActions = types => Object.keys(types).reduce((o, key) => ({
  ...o,
  [camelify(key)]: payload => ({
    type: types[key],
    payload,
  }),
}), {})

export const handleActions = (handlers, initialState) => (state = initialState, action) => {
  const handler = handlers[action.type]
  if (typeof handler === 'function') return handler(state, action)
  return state
}

export const types = createTypes([
  'INCREMENT',
  'INCREMENT_ASYNC',
  'RESET',
], 'COUNTER')

const initialState = 0

const reducer = handleActions({
  [types.INCREMENT]: (state, { payload }) => state + payload,
  [types.RESET]: () => initialState,
}, initialState)
export const actions = createActions(types)

export const selectCounter = state => state.counter

export default reducer

