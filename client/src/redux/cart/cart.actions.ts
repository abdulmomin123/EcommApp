import { CartActions, Product } from '../../Types';

export const toggleCartHidden = (): CartActions => ({
  type: 'TOGGLE_CART_HIDDEN',
});

export const addToCart = (item: Product): CartActions => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const removeFromCart = (item: Product): CartActions => ({
  type: 'REMOVE_ITEM',
  payload: item,
});

export const clearItemFromCart = (item: Product): CartActions => ({
  type: 'CLEAR_ITEM_FROM_CART',
  payload: item,
});

export const clearCart = (): CartActions => ({ type: 'CLEAR_CART' });
