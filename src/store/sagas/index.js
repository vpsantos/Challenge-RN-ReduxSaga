import { all, takeLatest } from 'redux-saga/effects';

import { Types as BooksTypes } from 'store/ducks/books';
import { Types as BookTypes } from 'store/ducks/book';
import { Types as SearchTypes } from 'store/ducks/search';

import { getBooks } from './books';
import { getBook } from './book';
import { search } from './search';

export default function* rootSaga() {
  return yield all([
    takeLatest(BooksTypes.GET_REQUEST, getBooks),
    takeLatest(BookTypes.GET_REQUEST, getBook),
    takeLatest(SearchTypes.REQUEST, search),
  ]);
}
