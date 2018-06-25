import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* func() {
  console.log('Hello Sagas!');
  yield delay(1000);
  yield put({ type: 'ADD' })
}

// wacther saga
export default function* watchIncrementAsync() {
    yield takeEvery('ASYNCADD', func);
}
