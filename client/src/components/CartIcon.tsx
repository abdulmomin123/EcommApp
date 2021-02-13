import { useDispatch, useSelector } from 'react-redux';
import '../styles/CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { toggleCartHidden } from '../redux/cart/cart.actions';
import { selectCartItemsCount } from '../redux/cart/cart.selectors';

const CartIcon = () => {
  // Using store
  const dispatch = useDispatch();
  const quantity = useSelector(selectCartItemsCount);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity()}</span>
    </div>
  );
};

export default CartIcon;
