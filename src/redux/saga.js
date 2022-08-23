import { takeLatest, all, put, fork, call } from 'redux-saga/effects'
import { getFlickr } from './api'
import * as types from './actionType'

export function* returnFlickr(action) {
  try {
    const response = yield call(getFlickr, action.Opt)
    yield put({
      type: types.FLICKR.success,
      payload: response.data.photos.photo,
    })
  } catch (err) {
    yield put({ typs: types.FLICKR.err, payload: err })
  }
}

export function* callFlickr() {
  yield takeLatest(types.FLICKR.start, returnFlickr)
}

export default function* rootSaga() {
  yield all([fork(callFlickr)])
}
