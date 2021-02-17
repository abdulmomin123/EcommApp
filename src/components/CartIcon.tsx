import '../styles/CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { GET_CART_ITEMS_COUNT, toggleCartHidden } from '../graphql/resolvers';
import { useQuery } from '@apollo/client';

const CartIcon = () => {
  const { data } = useQuery<{ cartItemsCount: boolean }>(GET_CART_ITEMS_COUNT);

  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{data?.cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
