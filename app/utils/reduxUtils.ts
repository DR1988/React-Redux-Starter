import { Action } from 'redux'

const camelify = (str: string) => str
  .split('_')
  .map((s, i) => (i !== 0 ? s[0] + s.slice(1).toLowerCase() : s.toLowerCase()))
  .join('')

const splitify = (str: string) => str
  .replace(/([A-Z]\w+$)/g, (match) => '_' + match)

console.log('incrementAsync', splitify('incrementAsync'))
type NonEmptyArray<T> = [T, ...T[]]

export const createTypes = <T extends string>(arr: T[], namespace: string) =>
  arr.reduce((o, type) => ({
    ...o,
    [type]: `${namespace.toUpperCase()}_${splitify(type).toUpperCase()}`,
  }), {} as { [key in T]: string })

export const createActions = <T, U> (types: T): { [key in keyof T]: (arg: Partial<U>) => U } => Object.keys(types).reduce((o, key) => ({
  ...o,
  [key]: payload => ({
    type: types[key],
    payload,
  }),
}), {})

// export const createActions = <T>(types: T): { [key in keyof T]: Function } => Object.keys(types).reduce((o, key) => ({
//   ...o,
//   [camelify(key)]: payload => ({
//     type: types[key],
//     payload,
//   }),
// }), {})

export const handleActions = <T, U>(handlers: T, initialState: U) =>
  (state = initialState, action: Action<keyof T>) => {
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
