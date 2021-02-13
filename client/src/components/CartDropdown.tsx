import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../redux/cart/cart.actions';
import { selectCartItems } from '../redux/cart/cart.selectors';
import '../styles/CartDropdown.scss';
import CartItem from './CartItem';
import CustomButton from './CustomButton';

const CartDropdown = () => {
  // Using store
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {/* The items */}
        {items.length ? (
          items.map(item => <CartItem item={item} key={item.id} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => (
          // eslint-disable-next-line
          history.push('/checkout'), dispatch(toggleCartHidden())
        )}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
