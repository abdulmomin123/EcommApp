import { useSelector } from 'react-redux';
import '../styles/CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../redux/cart/cart.selectors';
import { toggleCartHidden } from '../graphql/resolvers';

const CartIcon = () => {
  // Using store
  const quantity = useSelector(selectCartItemsCount);

  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity()}</span>
    </div>
  );
};

export default CartIcon;
