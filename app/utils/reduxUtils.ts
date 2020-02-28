import { Action } from 'redux'

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never


const camelify = (str: string) => str
  .split('_')
  .map((s, i) => (i !== 0 ? s[0] + s.slice(1).toLowerCase() : s.toLowerCase()))
  .join('')

const splitify = (str: string) => str
  .replace(/([A-Z]\w+$)/g, (match) => '_' + match)

type NonEmptyArray<T> = [T, ...T[]]

export const createTypes = <T extends string>(arr: T[], namespace: string)
  : { [key in T]: string } =>
  arr.reduce((o, type) => ({
    ...o,
    [type]: `${namespace.toUpperCase()}_${splitify(type).toUpperCase()}`,
  }), {} as { [key in T]: string })

export const createActions = <T, U>(types: T):
  { [key in keyof T]: (payload: U[keyof U]) => { type: T[keyof T], payload?: U[keyof U] } } =>
  (Object.keys(types) as Array<keyof T>).reduce((o, key) => {
    return {
      ...o,
      [key]: (payload: U[keyof U]) => ({
        type: types[key],
        payload,
      }),
    }
  }, {} as { [key in keyof T]: (payload: U[keyof U]) => { type: T[keyof T], payload?: U[keyof U] } })


export const createActionsB = <T, U>(types: T):
  { [key in keyof T]: (payload: U[keyof U]) => U } =>
  Object.keys(types).reduce((o, key) => ({
    ...o,
    [key]: payload => ({
      type: types[key],
      payload,
    }),
  }), {})


/* export const createActionsOld = <T>(types: T): { [key in keyof T]: Function } => Object.keys(types).reduce((o, key) => ({
  ...o,
  [camelify(key)]: payload => ({
    type: types[key],
    payload,
  }),
}), {}) */

export const handleActions = <T, U>(handlers: T, initialState: U) => {
  return (state = initialState, action: Action<keyof T>): U => {
    console.log('action', action)
    const handler = handlers[action.type]
    if (typeof handler === 'function') return handler(state, action)
    return state
  }
}

export const action = (type: any, payload: any, meta: any) => {
  if (typeof payload === 'undefined') {
    return { type }
  }
  if (typeof meta === 'undefined') {
    return { type, payload }
  }
  return { type, payload, meta }
}
