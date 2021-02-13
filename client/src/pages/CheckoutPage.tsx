import { useSelector } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';
import StripeButton from '../components/StripeButton';
import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';
import '../styles/CheckoutPage.scss';

const CheckoutPage = () => {
  // Using store
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {/* The cart items */}
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${totalPrice}</div>

      {/* Pay now button */}
      <StripeButton price={totalPrice} />
    </div>
  );
};

export default CheckoutPage;
