import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../assets/logo.svg';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { selectCartHidden } from '../redux/cart/cart.selectors';
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

interface Selection {
  currentUser: UserProfile | null;
  isDropdownHidden: boolean;
}

const Header = () => {
  // Using store
  const { currentUser, isDropdownHidden } = useSelector(
    createStructuredSelector<RootState, Selection>({
      currentUser: selectCurrentUser,
      isDropdownHidden: selectCartHidden,
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
      {isDropdownHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
