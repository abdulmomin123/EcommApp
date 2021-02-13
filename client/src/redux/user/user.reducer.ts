import { Reducer } from 'redux';
import { UserActions, UserProfile } from '../../Types';

interface State {
  currentUser: UserProfile | null;
  errorMessage: string;
}

const INITIAL_STATE: State = {
  currentUser: null,
  errorMessage: '',
};

const userReducer: Reducer<State, UserActions> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        currentUser: payload as UserProfile,
        errorMessage: '',
      };
    case 'SIGN_IN_FAILURE':
      return {
        ...state,
        currentUser: null,
        errorMessage: payload as string,
      };
    case 'SIGN_OUT_SUCCESS':
      return { ...state, currentUser: null, errorMessage: '' };
    case 'SIGN_OUT_FAILURE':
      return { ...state, errorMessage: payload as string };
    case 'SIGN_UP_FAILURE':
      return { ...state, errorMessage: payload as string };
    default:
      return state;
  }
};

export default userReducer;
