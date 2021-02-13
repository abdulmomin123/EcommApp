import { Product } from '../../Types';

export const addItemToCart = (cartItems: Product[], cartItemToAdd: Product) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // If the item is a new item, add it to cart
  if (!existingCartItem) return [...cartItems, cartItemToAdd];

  // If it's already there, increment it's quantity by 1
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToAdd.id
      ? { ...cartItemToAdd, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const removeItemFromCart = (
  cartItems: Product[],
  cartItemToRemove: Product
) => {
  // If the quantity is already 1, remove the item from cart
  if (cartItemToRemove.quantity <= 1)
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? ({
          ...cartItemToRemove,
          quantity: cartItemToRemove.quantity - 1,
        } as Product)
      : cartItem
  );
};
