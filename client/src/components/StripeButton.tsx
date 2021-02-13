import { FC } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface Props {
  price: number;
}

const StripeButton: FC<Props> = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    'pk_test_51IIBbiK2oV9bQlX47GNbSDvyL5wo2yErhp1WPpBCu24GeMmwlxXi7qGGBxI9WeIuXbiAKzsFwbfKlbvy13favRLB003GKsyoUq';

  const onToken = (token: Token) => console.log(token);

  return (
    <StripeCheckout
      stripeKey={publishableKey}
      token={onToken}
      amount={priceInCents}
      name="E-comm App"
      label="Pay Now"
      panelLabel="Pay Now"
      description={`Your Tota Is: $${price}`}
      image="http://svgshare.com/i/CUz.svg"
      billingAddress
      shippingAddress
    />
  );
};

export default StripeButton;
