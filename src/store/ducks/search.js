import Immutable from 'seamless-immutable';

/**
 * Types
 */
export const Types = {
  REQUEST: 'search/REQUEST',
  SUCCESS: 'search/SUCCESS',
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

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
        refreshing: action.payload.refreshing || false,
      };
    case Types.SUCCESS:
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
  searchRequest: ({ term, startIndex, refreshing }) => ({
    type: Types.REQUEST,
    payload: { term, startIndex, refreshing },
  }),

  searchSuccess: ({ data, startIndex }) => ({
    type: Types.SUCCESS,
    payload: { data, startIndex },
  }),
};
