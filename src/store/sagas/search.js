import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as SearchActions } from 'store/ducks/search';

export function* search(action) {
  try {
    const response = yield call(
      api.get,
      `?q=${action.payload.term}&startIndex=${action.payload.startIndex}&maxResults=18`,
    );

    yield put(
      SearchActions.searchSuccess({ data: response.data, startIndex: action.payload.startIndex }),
    );
  } catch (err) {
    yield put(SearchActions.setError('There was not possible to load the books'));
  }
}
