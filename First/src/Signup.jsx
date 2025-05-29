import SocialLogin from './components/SocialLogin';
import InputField from './components/InputField';
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup form submitted!');
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Create Your Account</h2>

      <SocialLogin />

      <div className="separator"><span>or</span></div>

      <form onSubmit={handleSubmit} className="login-form">
        <InputField type="text" placeholder="Full Name" icon="person" />
        <InputField type="email" placeholder="Email Address" icon="mail" />
        <InputField type="password" placeholder="Create Password" icon="lock" />

        <button type="submit" className="login-button"><b>Sign Up</b></button>
      </form>

      <p className="signup-prompt">
        Already have an account? <Link to="/login" className="signup-link">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
