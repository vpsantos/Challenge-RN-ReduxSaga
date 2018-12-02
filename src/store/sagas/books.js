import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as BooksActions } from 'store/ducks/books';
import { Creators as ErrorActions } from 'store/ducks/error';

export function* getBooks(action) {
  try {
    const response = yield call(
      api.get,
      `?q=all&startIndex=${action.payload.startIndex}&maxResults=18`,
    );

    yield put(
      BooksActions.getBooksSuccess({ data: response.data, startIndex: action.payload.startIndex }),
    );
  } catch (err) {
    yield put(ErrorActions.setError('There was not possible to load the books'));
  }
}
