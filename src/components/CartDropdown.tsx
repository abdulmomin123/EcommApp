import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_CART_ITEMS, toggleCartHidden } from '../graphql/resolvers';
import '../styles/CartDropdown.scss';
import { Product } from '../Types';
import CartItem from './CartItem';
import CustomButton from './CustomButton';

const CartDropdown = () => {
  // Using gql
  const { data } = useQuery<{ cartItems: Product[] }>(GET_CART_ITEMS);

  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {/* The items */}
        {data?.cartItems.length ? (
          data.cartItems.map(item => <CartItem item={item} key={item.id} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => (
          // eslint-disable-next-line
          history.push('/checkout'), toggleCartHidden()
        )}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
