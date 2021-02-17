import { gql } from '@apollo/client';
import { client } from '..';
import { Product } from '../Types';
import { addItemToCart } from '../redux/cart/cart.utils';

const GET_CART_HIDDEN = gql`
  query cartHidden {
    cartHidden @client
  }
`;

export const GET_CART_ITEMS = gql`
  query cartItems {
    cartItems @client
  }
`;

export const GET_CART_ITEMS_COUNT = gql`
  query cartItemsCount {
    cartItemsCount @client
  }
`;

export const toggleCartHidden = () => {
  // Reading existing state of the cart from cache
  const data = client.readQuery<{ cartHidden: boolean }>({
    query: GET_CART_HIDDEN,
  });

  // Updating the cache
  client.writeQuery({
    query: GET_CART_HIDDEN,
    data: { cartHidden: !data?.cartHidden },
  });
};

export const updateCartItemsCount = (cartItems: Product[]) => {
  // Calculate new cartItemsCount
  const { quantity } = cartItems.reduce(
    (acc, cur) => ({
      ...acc,
      quantity: acc.quantity + cur.quantity,
    }),
    { quantity: 0 } as Product
  );

  // Write to the cache
  client.writeQuery({
    query: GET_CART_ITEMS_COUNT,
    data: { cartItemsCount: quantity },
  });
};

export const updateCartItems = (item: Product) => {
  const data = client.readQuery<{ cartItems: Product[] }>({
    query: GET_CART_ITEMS,
  });

  const updatedCartItems = addItemToCart(data!.cartItems, item);

  updateCartItemsCount(updatedCartItems);

  client.writeQuery({
    query: GET_CART_ITEMS,
    data: {
      cartItems: updatedCartItems,
    },
  });
};
