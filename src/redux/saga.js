import { takeLatest, all, put, fork, call } from 'redux-saga/effects'
import { getFlickr, getYoutube, getMembers } from './api'
import * as types from './actionType'

export function* returnFlickr(action) {
  try {
    const response = yield call(getFlickr, action.Opt)
    yield put({
      type: types.FLICKR.success,
      payload: response.data.photos.photo,
    })
  } catch (err) {
    yield put({ type: types.FLICKR.err, payload: err })
  }
}
export function* callFlickr() {
  yield takeLatest(types.FLICKR.start, returnFlickr)
}

export function* returnYoutube() {
  try {
    const response = yield call(getYoutube)
    yield put({ type: types.YOUTUBE.success, payload: response.data.items })
  } catch (err) {
    yield put({ type: types.YOUTUBE.err, payload: err })
  }
}
export function* callYoutube() {
  yield takeLatest(types.YOUTUBE.start, returnYoutube)
}

export function* returnMembers() {
  try {
    const response = yield call(getMembers)
    yield put({ type: types.MEMBERS.success, payload: response.data.members })
  } catch (err) {
    yield put({ type: types.MEMBERS.err, payload: err })
  }
}
export function* callMembers() {
  yield takeLatest(types.MEMBERS.start, returnMembers)
}

export default function* rootSaga() {
  yield all([fork(callFlickr), fork(callYoutube), fork(callMembers)])
}
