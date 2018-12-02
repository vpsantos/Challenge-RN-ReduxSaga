import Immutable from 'seamless-immutable';

/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'book/GET_REQUEST',
  GET_SUCCESS: 'book/GET_SUCCESS',
};

/**
 * Reducer
 */
const INITIAL_STATE = Immutable({
  data: {},
  loading: false,
});

export default function book(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  getBookRequest: bookId => ({
    type: Types.GET_REQUEST,
    payload: { bookId },
  }),

  getBookSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
