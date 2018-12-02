import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as BookActions } from 'store/ducks/book';
import { Creators as ErrorActions } from 'store/ducks/error';

export function* getBook(action) {
  try {
    const response = yield call(api.get, `/${action.payload.bookId}`);

    yield put(BookActions.getBookSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('There was not possible to load the book'));
  }
}
