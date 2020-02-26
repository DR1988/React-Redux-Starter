import { all, fork } from 'redux-saga/effects'
import { incrementAsyncSaga } from './counter'
// import { getUsersWatcher } from './users'

export default function* rootSaga() {
  yield all([
    fork(incrementAsyncSaga),
    // fork(getUsersWatcher),
  ])
}
