import SigninForm from '../components/SigninForm';
import SignupForm from '../components/SignupForm';
import '../styles/SigninPage.scss';

const SigninPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default SigninPage;
