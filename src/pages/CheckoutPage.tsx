import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';
import StripeButton from '../components/StripeButton';
import { GET_CART_ITEMS } from '../graphql/resolvers';
import { selectCartTotal } from '../redux/cart/cart.selectors';
import '../styles/CheckoutPage.scss';
import { Product } from '../Types';

const CheckoutPage = () => {
  // Using gql & store
  const { data } = useQuery<{ cartItems: Product[] }>(GET_CART_ITEMS);
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
      {data?.cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${totalPrice}</div>

      {/* Pay now button */}
      <StripeButton price={totalPrice} />
    </div>
  );
};

export default CheckoutPage;
