import { Action } from 'redux'

const camelify = (str: string) => str
  .split('_')
  .map((s, i) => (i !== 0 ? s[0] + s.slice(1).toLowerCase() : s.toLowerCase()))
  .join('')

type NonEmptyArray<T> = [T, ...T[]]

export const createTypes = (arr: NonEmptyArray<string>, namespace: string): { [key: string]: string } =>
  arr.reduce((o, type) => ({
    ...o,
    [type]: `${namespace}_${type}`,
  }), {})

export const createActions = (types: Object) => Object.keys(types).reduce((o, key) => ({
  ...o,
  [camelify(key)]: payload => ({
    type: types[key],
    payload,
  }),
}), {})

export const handleActions = (handlers: Object, initialState: Object) => (state = initialState, action: Action) => {
  const handler = handlers[action.type]
  if (typeof handler === 'function') return handler(state, action)
  return state
}

export const action = (type, payload, meta) => {
  if (typeof payload === 'undefined') {
    return { type }
  }
  if (typeof meta === 'undefined') {
    return { type, payload }
  }
  return { type, payload, meta }
}
