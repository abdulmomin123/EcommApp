import { createSelector } from 'reselect';
import { Product } from '../../Types';
import { RootState } from '../rootReducer';

export const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.items);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// Returns the total quantities of products
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => () => {
    const { quantity } = cartItems.reduce(
      (acc, cur) => ({
        ...acc,
        quantity: acc.quantity + cur.quantity,
      }),
      { quantity: 0 } as Product
    );

    return quantity;
  }
);

// Returns the total price of all products available in the cart
export const selectCartTotal = createSelector([selectCartItems], cartItems => {
  const { price } = cartItems.reduce(
    (acc, cur) => {
      return {
        ...acc,
        price: acc.price * acc.quantity + cur.price * cur.quantity,
        quantity: 1,
      };
    },
    { price: 0, quantity: 0 } as Product
  );

  return price;
});
