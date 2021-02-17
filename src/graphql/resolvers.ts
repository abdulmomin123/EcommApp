import { gql } from '@apollo/client';
import { client } from '..';

const GET_CART_HIDDEN = gql`
  query cartHidden {
    cartHidden @client
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
