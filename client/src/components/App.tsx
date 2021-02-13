import { Redirect, Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import HomePage from '../pages/HomePage';
import Header from './Header';
import ShopPage from '../pages/ShopPage';
import SigninPage from '../pages/SigninPage';
import CheckoutPage from '../pages/CheckoutPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { useEffect } from 'react';
import { checkUserSession } from '../redux/user/user.actions';

const App = () => {
  // Using store
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  // Checking if the user is logged in
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      {/* Header */}
      <Header />

      <Switch>
        {/* Home route */}
        <Route exact path="/" component={HomePage} />

        {/* Sign in / Sign up Page */}
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to={'/'} /> : <SigninPage />)}
        />

        {/* Shop page route */}
        <Route path="/shop" component={ShopPage} />

        {/* Checkout route */}
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

export default App;
