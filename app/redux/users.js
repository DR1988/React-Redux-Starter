import { createTypes, createActions, handleActions } from '../utils/reduxUtils'

export const types = createTypes([
  'GET_USERS',
  'GET_USERS_SUCCESS',
  'GET_USERS_FAILED',
], 'USERS')

const initialState = {
  fetchingUsers: false,
  users: [],
}

export const actions = createActions(types)
export const selectUsers = state => state.users.users

const reducer = handleActions({
  [types.GET_USERS]: state => ({
    ...state,
    fetchingUsers: true,
  }),
  [types.GET_USERS_SUCCESS]: (state, { payload }) => (
    {
      users: payload,
      fetchingUsers: false,
    }),
  [types.GET_USERS_FAILED]: () => ({
    fetchingUsers: false,
  }),
}, initialState)

export default reducer

