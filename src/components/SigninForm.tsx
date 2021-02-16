import React from 'react';
import '../styles/SigninForm.scss';
import useInput from '../hooks/useInput';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
} from '../redux/user/user.actions';
import { selectCurrentUser } from '../redux/user/user.selectors';

const SigninForm = () => {
  // Using store
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  // State
  const [email, setEmail, resetEmail] = useInput('');
  const [password, setPassword, resetPassword] = useInput('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(emailSignInStart({ email, password }));

    // Clear input fields if the sing in was successful
    if (!currentUser) return;

    resetEmail();
    resetPassword();
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          value={email}
          submitValue={setEmail}
          required
        />

        <FormInput
          type="password"
          label="Password"
          value={password}
          submitValue={setPassword}
          required
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
