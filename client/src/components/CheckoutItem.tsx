import { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  clearItemFromCart,
  removeFromCart,
} from '../redux/cart/cart.actions';
import '../styles/CheckoutItem.scss';
import { Product } from '../Types';

interface Props {
  cartItem: Product;
}

const CheckoutItem: FC<Props> = ({ cartItem }) => {
  // Using store
  const dispatch = useDispatch();

  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        {/* Decrease quantity icon */}
        <div
          className="arrow"
          onClick={() => dispatch(removeFromCart(cartItem))}
        >
          &#10094;
        </div>

        <span className="value">{quantity}</span>

        {/* Increase quantity icon */}
        <div className="arrow" onClick={() => dispatch(addToCart(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>

      {/* Remove item icon */}
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
