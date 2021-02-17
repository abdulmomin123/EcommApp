import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../assets/logo.svg';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../redux/rootReducer';
import { UserProfile } from '../Types';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from '../styles/Header.styles';
import { signOutStart } from '../redux/user/user.actions';
import { gql, useQuery } from '@apollo/client';

interface Selection {
  currentUser: UserProfile | null;
}

interface Data {
  cartHidden: boolean;
}

const Header = () => {
  // Using graphQL
  const { data } = useQuery<Data>(gql`
    query cartHidden {
      cartHidden
    }
  `);

  // Using store
  const { currentUser } = useSelector(
    createStructuredSelector<RootState, Selection>({
      currentUser: selectCurrentUser,
    })
  );
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        {/* Shop page link */}
        <OptionLink to="/shop">SHOP</OptionLink>

        {/* Contact page link */}
        <OptionLink to="/contact">CONTACT</OptionLink>

        {/* Sign in / Sing up page link */}
        {currentUser ? (
          <OptionLink as={'div'} onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>

      {/* Cart dropdown */}
      {data?.cartHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
