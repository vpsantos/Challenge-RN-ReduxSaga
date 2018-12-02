import Immutable from 'seamless-immutable';

/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'books/GET_REQUEST',
  GET_SUCCESS: 'books/GET_SUCCESS',
};

/**
 * Reducer
 */
const INITIAL_STATE = Immutable({
  data: [],
  startIndex: 0,
  totalItems: 0,
  loading: false,
  refreshing: false,
});

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
        refreshing: action.payload.refreshing || false,
      };
    case Types.GET_SUCCESS:
      return {
        data:
          action.payload.startIndex === 0
            ? action.payload.data.items
            : [...state.data, ...action.payload.data.items],
        totalItems: action.payload.data.totalItems,
        startIndex: action.payload.startIndex,
        loading: false,
        refreshing: false,
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  getBooksRequest: ({ startIndex, refreshing }) => ({
    type: Types.GET_REQUEST,
    payload: { startIndex, refreshing },
  }),

  getBooksSuccess: ({ data, startIndex }) => ({
    type: Types.GET_SUCCESS,
    payload: { data, startIndex },
  }),
};
