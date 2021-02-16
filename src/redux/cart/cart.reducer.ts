import { Reducer } from 'redux';
import { CartActions, Product } from '../../Types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

interface State {
  hidden: boolean;
  items: Product[];
}

const INITIAL_STATE: State = {
  hidden: true,
  items: [],
};

const cartReducer: Reducer<State, CartActions> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case 'TOGGLE_CART_HIDDEN':
      return { ...state, hidden: !state.hidden };
    case 'ADD_ITEM':
      return { ...state, items: addItemToCart(state.items, payload!) };
    case 'REMOVE_ITEM':
      return { ...state, items: removeItemFromCart(state.items, payload!) };
    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload!.id),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export default cartReducer;
