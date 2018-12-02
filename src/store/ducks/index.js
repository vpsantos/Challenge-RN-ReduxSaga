import { combineReducers } from 'redux';

import books from './books';
import book from './book';
import search from './search';
import error from './error';

export default combineReducers({
  books,
  book,
  search,
  error,
});
