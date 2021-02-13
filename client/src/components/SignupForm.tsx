import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { signupStart } from '../redux/user/user.actions';
import '../styles/SignupForm.scss';
import CustomButton from './CustomButton';
import FormInput from './FormInput';

const SignupForm = () => {
  // Using store
  const dispatch = useDispatch();

  // State
  const [displayName, setDisplayName] = useInput();
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const [confirmPassword, setConfirmPassword] = useInput();

  // Submit handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // If password & confirmPassword are not the same
    if (password !== confirmPassword) return alert('Passwords must match!');

    dispatch(signupStart({ email, password, displayName }));

    // Resetting the input fields
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          submitValue={setDisplayName}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          submitValue={setEmail}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          submitValue={setPassword}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          submitValue={setConfirmPassword}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignupForm;
