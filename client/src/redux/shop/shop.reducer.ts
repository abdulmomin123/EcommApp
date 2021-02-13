import { Reducer } from 'redux';
import { Collections, ShopActions } from '../../Types';

interface State {
  collections: Collections | null;
  errorMessage: string;
}

const INITIAL_STATE: State = {
  collections: null,
  errorMessage: '',
};

const shopReducer: Reducer<State, ShopActions> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case 'FETCH_COLLECTIONS_SUCCESS':
      return {
        ...state,
        collections: payload as Collections | null,
      };
    case 'FETCH_COLLECTIONS_FAILURE':
      return { ...state, errorMessage: payload as string };
    default:
      return state;
  }
};

export default shopReducer;
